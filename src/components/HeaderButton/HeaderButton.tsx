import React, { useState } from 'react';
import styles from './HeaderButton.module.css';

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
      <button type="button" className={styles.button}>
        {title}
      </button>
      {isHovered && sub && (
      <div className={styles.dropdown}>
        {sub.map((subtitle) => <button key={`${title}-${subtitle}`} type="button">{subtitle}</button>)}
      </div>
      )}
    </div>
  );
}

HeaderButton.defaultProps = {
  sub: [],
};
