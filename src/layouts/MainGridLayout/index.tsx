import React from "react";

import styles from "./MainGridLayout.module.scss";

export type MainGridLayoutType = {
  children: React.ReactNode;
};

const MainGridLayout = ({ children }: MainGridLayoutType) => {
  return <div className={styles.mainGridLayout}>{children}</div>;
};

export default MainGridLayout;
