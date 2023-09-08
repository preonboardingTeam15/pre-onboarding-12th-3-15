import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useDebouncedSearch } from '../../context/DebouncedSearchContext';
import useKeyPress from '../../hooks/useKeyPress';
import { StyledRecommendedSearch } from '../../styles/RecommendedStyle';
import { BiSearch } from 'react-icons/bi';

interface RecommendationsProps {
  recommendations: string[];
}

const RecommendedSearch: React.FC<RecommendationsProps> = ({ recommendations }) => {
  // 현재 선택된 자동완성 인덱스
  const [selectedItem, setSelectedItem] = useState<number>(-1);
  // 자동완성목록 컨테이너 요소
  const listRef = useRef<HTMLUListElement>(null);
  const upArrowPressed = useKeyPress('ArrowUp');
  const downArrowPressed = useKeyPress('ArrowDown');
  const enterPressed = useKeyPress('Enter');

  const { query, debouncedQuery, setQuery } = useDebouncedSearch();

  useEffect(() => {
    if (enterPressed && selectedItem !== -1) {
      setQuery(recommendations[selectedItem]);
    }
  }, [enterPressed, selectedItem, recommendations, setQuery]);

  const handleSelectItem = useCallback(
    (index: number) => {
      setSelectedItem(index);
    },
    [setSelectedItem],
  );

  // 새로운 검색어일때 순서를 -1로 변경
  useEffect(() => {
    setSelectedItem(-1);
  }, [query, debouncedQuery]);

  // 위쪽 화살표 키를 누를 때 이전 항목 선택
  useEffect(() => {
    if (upArrowPressed) {
      setSelectedItem(prevIndex =>
        prevIndex === -1 ? recommendations.length - 1 : Math.max(prevIndex - 1, 0),
      );
    }
  }, [upArrowPressed, recommendations.length]);

  // 아래쪽 화살표 키를 누를 때 다음 항목 선택
  useEffect(() => {
    if (downArrowPressed && selectedItem === -1) {
      setSelectedItem(0);
    } else if (downArrowPressed) {
      setSelectedItem(prevIndex =>
        prevIndex === -1 ? 0 : Math.min(prevIndex + 1, recommendations.length - 1),
      );
    }
  }, [downArrowPressed, recommendations.length]);

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

  return (
    <StyledRecommendedSearch>
      <span>추천검색어</span>
      <hr />
      {recommendations.length > 0 ? (
        <ul ref={listRef}>
          {recommendations.map((recommendation, index) => (
            <li
              key={index}
              className={selectedItem === index ? 'selected' : ''}
              onClick={() => handleSelectItem(index)}
              onMouseOver={() => setSelectedItem(index)}
            >
              <BiSearch
								style={{
									marginRight: '2px',
									textAlign: 'center',
									color: 'gray',
								}}
							/>
              {highlightText(recommendation)}
            </li>
          ))}
        </ul>
      ) : (
        <p>검색어 없음</p>
      )}
    </StyledRecommendedSearch>
  );
};

export default RecommendedSearch;
