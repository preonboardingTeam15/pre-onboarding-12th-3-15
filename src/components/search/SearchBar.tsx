import React, { SetStateAction, useCallback, useEffect } from 'react';
import { StyledInput } from '../../styles/SearchBar';
import useKeyPress from '../../hooks/useKeyPress';

interface SearchBarProps {
  query: string;
  setQuery: (value: SetStateAction<string>) => void;
  onClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = React.memo(({ query, setQuery, onClick }) => {
  const memoizedHandleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    [setQuery],
  );

  const escPressed = useKeyPress('Escape');

  useEffect(() => {
    if (escPressed) {
      setQuery('');
    }
  }, [escPressed]);

  return (
    <>
      <StyledInput
        type="text"
        placeholder="질환명을 입력해주세요"
        value={query}
        onChange={memoizedHandleChange}
        onClick={onClick}
      />
    </>
  );
});

export default SearchBar;
