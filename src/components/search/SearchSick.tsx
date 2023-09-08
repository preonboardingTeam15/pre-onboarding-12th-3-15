import { useState, useRef } from 'react';
import { useDebouncedSearch } from '../../context/DebouncedSearchContext';
import { RecommendedContainer } from '../../styles/RecommendedStyle';
import RecommendedSearch from './RecommendedSearch';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { KeywordQueryData, SickData } from 'sickType';
import SearchInput from './SearchInput';
import { useFetchGate } from '../../hooks/useFetchGate';

interface SearchSickProps extends KeywordQueryData {
  useCache: boolean;
}

const RECOMMENDATION_NUMBER = 10;

const SearchSick = ({ useCache: initialUseCache }: SearchSickProps) => {
  const { query, setQuery, debouncedQuery } = useDebouncedSearch();
  const sickList = useFetchGate(initialUseCache, debouncedQuery);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const searchContainerRef = useRef(null);
  const [isSearchContainerFocused, setIsSearchContainerFocused] = useState(false);

  const filterSickList = (list: SickData[], query: string) => {
    return list.filter(
      ({ sickNm }) => query.toLowerCase() === sickNm.slice(0, query.length).toLowerCase(),
    );
  };

  const filteredSickList = debouncedQuery
    ? { response: filterSickList(sickList?.response || [], debouncedQuery) }
    : null;

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
