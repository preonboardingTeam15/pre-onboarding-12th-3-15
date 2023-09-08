import { SetStateAction, useState, useEffect, useCallback, useRef } from 'react';
import { SearchSickList, GetSickListResponseType } from '../../lib/api/SearchSickList';
import { HttpClient } from '../../lib/api/HttpClient';
import { useDebouncedSearch } from '../../context/DebouncedSearchContext';
import SearchBar from './SearchBar';
import { SearchInputContainer } from '../../styles/SearchBar';
import { RecommendedContainer } from '../../styles/RecommendedStyle';
import SearchButton from '../commons/SearchButton';
import RecommendedSearch from './RecommendedSearch';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { CloseButton, StyledAiFillCloseCircle } from '../../styles/Button';
import { KeywordQueryData, SickData } from 'sickType';
import localCache from '../../lib/cache/localCache';

interface SearchSickProps extends KeywordQueryData {
  useCache: boolean;
}

const httpClient = new HttpClient();
const RECOMMENDATION_NUMBER = 10;

const SearchSick = ({ useCache: initialUseCache }: SearchSickProps) => {
  const { query, setQuery, debouncedQuery } = useDebouncedSearch();
  const [sickList, setSickList] = useState<GetSickListResponseType | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  const searchContainerRef = useRef(null);
  const [isSearchContainerFocused, setIsSearchContainerFocused] = useState(false);

  // useCache 상태값 바꾸기 위함
  const [useCache, setUseCache] = useState(initialUseCache);

  const filteredSickList = debouncedQuery
    ? sickList
      ? {
          response: sickList.response.filter(
            ({ sickNm }) =>
              debouncedQuery.toLowerCase() === sickNm.slice(0, debouncedQuery.length).toLowerCase(),
          ),
        }
      : null
    : null;

  const fetchFromCache = async (keyword: string) => {
    const cachedResult = await localCache.readFromCache(keyword);

    if (cachedResult && cachedResult.length) {
      setUseCache(true);
      return { response: cachedResult };
    }

    setUseCache(false);
    return null;
  };

  const fetchFromAPI = async (keyword: string) => {
    const searchSickList = new SearchSickList(httpClient);

    try {
      const result = await searchSickList.getSickList(keyword, useCache);
      return result;
    } catch (error) {
      console.error('API 호출 오류:', error);
      return null;
    }
  };

  const handleSearch = useCallback(async () => {
    if (!debouncedQuery || !debouncedQuery.length) return;

    const cachedData = await fetchFromCache(debouncedQuery);

    if (cachedData) {
      setSickList(cachedData);
      return;
    }

    const apiData = await fetchFromAPI(debouncedQuery);

    if (apiData) {
      setSickList(apiData);
    }
  }, [debouncedQuery]);

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const cancelSearch = () => {
    setIsSearchOpen(false);
    setQuery('');
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  const highlightText = (text: string) => {
    const parts = text.split(new RegExp(`(${debouncedQuery})`, 'giu'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <strong style={{ color: 'hotpink' }} key={index}>
              {part}
            </strong>
          ) : (
            part
          ),
        )}
      </>
    );
  };

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  useOutsideClick({
    ref: searchRef,
    handler: closeSearch,
  });

  // 'recommendations' 값을 가져오는 함수
  const getRecommendations = () => {
    return (
      localCache.readFromCache('recommendations') ||
      filteredSickList?.response?.map(sick => ({
        sickCd: sick.sickCd,
        sickNm: sick.sickNm,
      })) ||
      []
    );
  };

  return (
    <div ref={searchRef}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <SearchInputContainer
          ref={searchContainerRef}
          onFocus={() => setIsSearchContainerFocused(true)}
          onBlur={() => setIsSearchContainerFocused(false)}
          style={{
            border: isSearchContainerFocused ? 'solid 2px #007be9' : '',
          }}
        >
          <SearchBar
            query={query}
            setQuery={setQuery}
            onClick={() => setIsSearchOpen(true)}
            handleChange={handleChange}
          />
        </SearchInputContainer>

        <CloseButton onClick={cancelSearch}>
          <StyledAiFillCloseCircle />
        </CloseButton>

        <SearchButton />
      </div>

      {isSearchOpen && (
        <RecommendedContainer>
          <RecommendedSearch
            recommendations={
              filteredSickList
                ? filteredSickList.response.map(sick => sick.sickNm).slice(0, RECOMMENDATION_NUMBER)
                : []
            }
            highlightText={highlightText}
          />
        </RecommendedContainer>
      )}
    </div>
  );
};

export default SearchSick;
