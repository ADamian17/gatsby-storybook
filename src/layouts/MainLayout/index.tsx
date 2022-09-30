import React from 'react';

import styles from './MainLayout.module.scss';

type MainLayoutType = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutType> = ({ children }) => {
  return <div className={styles.mainLayout}>{children}</div>;
};

export default MainLayout;
