import React from "react";
import MainNavbar from "../MainNavbar";

import styles from "./MainGridLayout.module.scss";

export type MainGridLayoutType = {
  children: React.ReactNode;
};

const MainGridLayout = ({ children }: MainGridLayoutType) => {
  return (
    <div className={styles.mainContentWrapper}>
      <MainNavbar />
      <main className={styles.mainGridLayout}>{children}</main>
    </div>
  )
};

export default MainGridLayout;
