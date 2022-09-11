import React from 'react';

import styles from './Heading.module.scss';

import { HeadingType } from '@types';

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
