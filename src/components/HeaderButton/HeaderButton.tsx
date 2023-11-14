import React, { useState } from 'react';

interface HeaderButtonProps {
  title: string,
  sub?: string[],
}

export default function HeaderButton({ title, sub } : HeaderButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button type="button">
        {title}
      </button>
      {isHovered && sub && (
        sub.map((subtitle) => <button key={`${title}-${subtitle}`} type="button">{subtitle}</button>)
      )}
    </div>
  );
}

HeaderButton.defaultProps = {
  sub: [],
};
