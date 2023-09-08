import { SetStateAction } from 'react';
import styled from 'styled-components';
import { SearchInputContainer } from '../../styles/SearchBar';
import { CloseButton, StyledAiFillCloseCircle } from '../../styles/Button';
import SearchButton from '../commons/SearchButton';
import SearchBar from './SearchBar';

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

interface SearchInputProps {
  query: string;
  setQuery: React.Dispatch<SetStateAction<string>>;
  setIsSearchOpen: (isOpen: boolean) => void;
  isSearchContainerFocused: boolean;
  setIsSearchContainerFocused: (isFocused: boolean) => void;
  cancelSearch: () => void;
  searchContainerRef: React.MutableRefObject<null>;
}

const SearchInput = ({
  query,
  setQuery,
  setIsSearchOpen,
  isSearchContainerFocused,
  setIsSearchContainerFocused,
  cancelSearch,
  searchContainerRef,
}: SearchInputProps) => {
  return (
    <SearchWrapper>
      <SearchInputContainer
        ref={searchContainerRef}
        onFocus={() => setIsSearchContainerFocused(true)}
        onBlur={() => setIsSearchContainerFocused(false)}
        style={{
          border: isSearchContainerFocused ? 'solid 2px #007be9' : '',
        }}
      >
        <SearchBar query={query} setQuery={setQuery} onClick={() => setIsSearchOpen(true)} />
      </SearchInputContainer>

      <CloseButton onClick={cancelSearch}>
        <StyledAiFillCloseCircle />
      </CloseButton>

      <SearchButton />
    </SearchWrapper>
  );
};

export default SearchInput;
