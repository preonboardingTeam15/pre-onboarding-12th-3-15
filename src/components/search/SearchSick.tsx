import { useState, useEffect, useCallback, useRef } from 'react';
import { SearchSickList, GetSickListResponseType } from '../../lib/api/SearchSickList';
import { HttpClient } from '../../lib/api/HttpClient';
import { useDebouncedSearch } from '../../context/DebouncedSearchContext';
import { RecommendedContainer } from '../../styles/RecommendedStyle';
import RecommendedSearch from './RecommendedSearch';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { KeywordQueryData, SickData } from 'sickType';
import localCache from '../../lib/cache/localCache';
import SearchInput from './SearchInput';

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

  const filterSickList = (list: SickData[], query: string) => {
    return list.filter(
      ({ sickNm }) => query.toLowerCase() === sickNm.slice(0, query.length).toLowerCase(),
    );
  };

  const filteredSickList = debouncedQuery
    ? { response: filterSickList(sickList?.response || [], debouncedQuery) }
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

  const fetchFromAPI = async (keyword: string, useCache: boolean) => {
    const searchSickList = new SearchSickList(httpClient);

    try {
      const result = await searchSickList.getSickList(keyword, useCache);
      return result;
    } catch (error) {
      console.error('API 호출 오류:', error);
      return null;
    }
  };

  useEffect(() => {
    if (!debouncedQuery || !debouncedQuery.length) return;
    const fetchData = async () => {
      let data = await fetchFromCache(debouncedQuery);
      if (!data) {
        data = await fetchFromAPI(debouncedQuery, useCache);
      }
      setSickList(data);
    };
    fetchData();
  }, [debouncedQuery, useCache]);

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const cancelSearch = () => {
    setIsSearchOpen(false);
    setQuery('');
  };

  useOutsideClick({
    ref: searchRef,
    handler: closeSearch,
  });

  return (
    <div ref={searchRef}>
      <SearchInput
        query={query}
        setQuery={setQuery}
        setIsSearchOpen={setIsSearchOpen}
        isSearchContainerFocused={isSearchContainerFocused}
        setIsSearchContainerFocused={setIsSearchContainerFocused}
        cancelSearch={cancelSearch}
        searchContainerRef={searchContainerRef}
      />

      {isSearchOpen && (
        <RecommendedContainer>
          <RecommendedSearch
            recommendations={
              filteredSickList
                ? filteredSickList.response.map(sick => sick.sickNm).slice(0, RECOMMENDATION_NUMBER)
                : []
            }
          />
        </RecommendedContainer>
      )}
    </div>
  );
};

export default SearchSick;
