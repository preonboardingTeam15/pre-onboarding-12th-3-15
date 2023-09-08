import React from 'react';

interface HighlightTextProps {
  text: string;
  query: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({ text, query }) => {
  const parts = text.split(new RegExp(`(${query})`, 'giu'));

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

export default HighlightText;
