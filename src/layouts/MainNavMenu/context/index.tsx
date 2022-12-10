import React, { createContext } from "react";
import navStyles from "./MainNavMenu.module.scss";

const INITIAL_STATE: { [key: string]: any } = {
  navStyles,
};

export const NavCtx = createContext(INITIAL_STATE);

const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <NavCtx.Provider value={{ ...INITIAL_STATE }}>{children}</NavCtx.Provider>
);

export default NavProvider;
