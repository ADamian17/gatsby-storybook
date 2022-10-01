import React from "react";

import styles from "./MainLayout.module.scss";

type MainLayoutType = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutType) => {
  return <div className={styles.mainLayout}>{children}</div>;
};

export default MainLayout;
