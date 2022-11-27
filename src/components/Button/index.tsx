import React from 'react';
import SvgDefs from '../SvgDefs';

import styles from './Button.module.scss';

type ButtonType = {
  text: string;
  loading?: boolean;
  withArrow?: boolean;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonType> = ({
  text,
  loading,
  withArrow,
  variant = 'primary',
}) => {
  const btnStyles = `${styles.btn} ${variant && styles[variant]} ${loading && styles.loading
    }`;

  const textStyles = `${styles.btn__text} ${withArrow && styles.withArrow}`;

  return (
    <a href="#" role="button" className={btnStyles}>
      {loading && <span className={styles.btn__spinner}></span>}
      <span className={textStyles}>
        {text} {withArrow && <SvgDefs svg="arrow-right" />}
      </span>
    </a>
  );
};

export default Button;
