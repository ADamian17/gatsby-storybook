import React from "react";
import MainNavbar from "../MainNavbar";

import styles from "./MainGridLayout.module.scss";

export type MainGridLayoutType = {
  children: React.ReactNode;
};

const MainGridLayout = ({ children }: MainGridLayoutType) => {
  return (
    <>
      <MainNavbar />
      <main className={styles.mainGridLayout}>{children}</main>
    </>
  )
};

export default MainGridLayout;
