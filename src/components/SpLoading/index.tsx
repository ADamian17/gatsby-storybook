import React from 'react';
import SvgDefs from '../SvgDefs';

import styles from './SpLoading.module.scss';

type SpLoadingType = {};

const SpLoading: React.FC<SpLoadingType> = (props) => {
  return (
    <div className={styles.loadingSpinnerWrapper}>
      <SvgDefs svg="loading-circle" className={styles.loadingSpinner} />
      <SvgDefs svg="sp-logo-butterfly" className={styles.loadingButterfly} />
    </div>
  );
};

export default SpLoading;
