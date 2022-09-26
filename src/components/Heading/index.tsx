import React from 'react';

import styles from './Heading.module.scss';

import { HeadingType } from '@types';
import SvgDefs from '../SvgDefs';
import SpLoading from '../SpLoading';

const Heading: React.FC<HeadingType> = ({ text, variant }) => {
  const headingVariant = {
    yellow: styles.yellow,
    blue: styles.blue,
    red: styles.red,
  };

  return (
    <>
      <h1 className={`${styles.heading} ${variant && headingVariant[variant]}`}>
        {text}
      </h1>
      <SpLoading />
      <p className={styles.cpoy}>
        <SvgDefs className={styles.checkMark} svg="check-mark" />
        hello
      </p>
      <SvgDefs className={styles.chevronDown} svg="chevron-down" />
      <SvgDefs className={styles.spLogo} svg="sp-logo-blue" />
    </>
  );
};

export default Heading;
