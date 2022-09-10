import React from 'react';

import styles from './Heading.module.scss';

type HeadingType = {
  text: string;
  variant?: 'blue' | 'yellow' | 'red';
  handleClick?: (e: React.MouseEvent) => void;
};

const Heading: React.FC<HeadingType> = ({ text, variant }) => {
  const headingVariant = {
    yellow: styles.yellow,
    blue: styles.blue,
    red: styles.red,
  };

  return (
    <h1 className={`${styles.heading} ${variant && headingVariant[variant]}`}>
      {text}
    </h1>
  );
};

export default Heading;
