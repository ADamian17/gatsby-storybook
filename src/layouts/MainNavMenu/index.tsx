import React, { useContext, useRef } from "react";

import { BackgroundColors } from "../../../assets/Types/BackgroundColors.type";
import { camelCase } from "camel-case";
import { SECURE_SIMPLEPRACTICE_SIGNIN } from "../../../constants";
import BtnTrial from "./BtnTrial";
import NavProvider, { NavCtx } from "./context";
import {
  FeaturesMenu,
  ProductsMenu,
  ProfessionsMenu,
  ResourcesMenu,
} from "./navMenus";
import PrimaryMenu from "./navComponents/PrimaryMenu";

export type MainNavMenuType = {
  backgroundColor?: BackgroundColors;
  setMenuOpen?: (arg0: boolean) => void;
  isSticky?: boolean;
  page?: string;
  isTransparent?: boolean;
  trialBtn?: string;
};

const MainNavMenu: React.FC<MainNavMenuType> = ({
  backgroundColor,
  setMenuOpen,
  isSticky,
  page = "",
  isTransparent,
  trialBtn,
}) => {
  const { navStyles } = useContext(NavCtx);
  const primaryNavContainer = useRef<HTMLDivElement>(null);

  const onMobileMenuClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const classList = primaryNavContainer.current.classList;
    if (classList.contains(navStyles.active)) {
      classList.remove(navStyles.active);
      e.currentTarget.classList.remove(navStyles.hamburgerActive);
      setMenuOpen(false);
    } else {
      classList.add(navStyles.active);
      e.currentTarget.classList.add(navStyles.hamburgerActive);
      setMenuOpen(true);
    }
  };
  const bgStyles =
    backgroundColor && !isSticky
      ? `${camelCase(`background ${backgroundColor}`)}`
      : ``;
  const transparentBg = isTransparent ? navStyles.transparentBg : null;
  const stickyNav =
    (backgroundColor === "blue" ||
      backgroundColor === "blueDim" ||
      backgroundColor === "purple") &&
    !isSticky
      ? navStyles.primaryMenuWhite
      : navStyles.primaryMenuBlue;

  return (
    <NavProvider>
      <nav className={navStyles.navPrimary}>
        <button
          onClick={onMobileMenuClick}
          className={`${navStyles.navMobileBtn} ${navStyles[camelCase(`btn ${backgroundColor}`)]} ${navStyles.hamburger}`}
        >
        </button>

        <div
          ref={primaryNavContainer}
          className={`${navStyles.menuPrimaryNavContainer} ${bgStyles} ${transparentBg}`}
        >
          <ul id={"menu-primary-nav"} className={stickyNav}>
            <ProductsMenu menuItemlabel="Products" />

            <FeaturesMenu menuItemlabel="Features" />

            <ProfessionsMenu menuItemlabel="Professions" />

            <ResourcesMenu menuItemlabel={"Resources"} />

            <PrimaryMenu label="Pricing" path="/pricing/" />

            <PrimaryMenu
              label="Sign In"
              path={SECURE_SIMPLEPRACTICE_SIGNIN}
              target="_blank"
            />

            <BtnTrial
              page={page}
              trialBtn={trialBtn}
              btnContent={{
                label: "Start For Free",
                path: "/sign-up/",
              }}
            />
          </ul>
        </div>
      </nav>
    </NavProvider>
  );
};

export default MainNavMenu;
