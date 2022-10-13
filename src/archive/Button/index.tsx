import React from 'react';

import styles from './Button.module.scss';

type ButtonType = {
  text: string;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonType> = ({
  text,
  loading,
  variant = 'primary',
}) => {
  const loadingStyles = loading ? styles.loading : null;
  const btnStyles = `${styles.button} ${variant && styles[variant]}`;

  return (
    <a className={btnStyles} role="button">
      <span className={loadingStyles}></span>
      {text}
    </a>
  );
};

export default Button;
