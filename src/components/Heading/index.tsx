import React from 'react';

import { HeadingType } from '@types';

import styles from './Heading.module.scss';

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
