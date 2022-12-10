import React, { useEffect, useState, useCallback } from "react";
import { Link } from "gatsby";
// import { camelCase } from "camel-case";
// import SimplePracticeLogoBlue from "../SVGIcons/SimplePracticeLogos/SimplePracticeLogoBlue";
// import SimplePracticeLogoWhite from "../SVGIcons/SimplePracticeLogos/SimplePracticeLogoWhite";
// import { useMainContext } from "../../contexts/MainContext";
// import { BackgroundColors } from "../../assets/Types/BackgroundColors.type";
// import PollenLogo from "../../images/pollen-logo.png";
// import PollenNavMenu from "../Menus/PollenNavMenu/PollenNavMenu";
// import { GlobalFooterLargeCtaHType } from "../../assets/Types/AcfGroupTypes/GlobalFooterLargeCtaHType.type";
// import MainNavMenu from "../Menus/MainNavMenu";
// import { useWindowSize } from "@hooks";

import styles from "./Header.module.scss";

interface HeaderProps {
  //   backgroundColor?: BackgroundColors;
  //   headerType?: string;
  //   page?: string;
  //   noSticky?: boolean;
  //   isTransparent?: boolean;
  //   simpleHeader?: GlobalFooterLargeCtaHType;
  //   alter?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  simpleHeader,
  backgroundColor,
  headerType,
  page,
  isTransparent,
  noSticky = false,
  alter,
}) => {
  // const { hasHeaderShadow } = useMainContext();
  // const [headerClass, setHeaderClass] = useState(`${styles.header}`);
  // const [trialClass, setTrialClass] = useState("");
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);
  // const [backgroundClass, setBackgroundClass] = useState(
  //   backgroundColor ? `${camelCase(`background ${backgroundColor}`)}` : ``
  // );
  // const [headerHeight, setHeaderHeight] = useState(null);
  // const [headerVersion, setHeaderVersion] = useState("");
  // const { width: windowWidth } = useWindowSize();
  // const [showWhiteLogo, setShowWhiteLogo] = useState<boolean>(false);

  // const getIsMenuOpen = useCallback(
  //   (isOpen: boolean) => {
  //     setIsMenuOpen(isOpen);
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [isMenuOpen]
  // );

  // useEffect(() => {
  //   if (windowWidth > 1023) {
  //     setShowWhiteLogo(true);
  //   } else {
  //     setShowWhiteLogo(false);
  //   }
  // }, [windowWidth]);

  // useEffect(() => {
  //   setHeaderHeight(document.querySelector<HTMLElement>("#mainHeader"));
  // }, []);

  // useEffect(() => {
  //   const sticky = 200;
  //   const scrollCallBack = () => {
  //     if (!noSticky && !isMenuOpen && window.pageYOffset > sticky) {
  //       const headerClasses = hasHeaderShadow
  //         ? `${styles.header} ${styles.stickyFadeIn}`
  //         : `${styles.header} ${styles.stickyFadeIn} ${styles.noBoxShadow}`;

  //       setHeaderClass(headerClasses);
  //       setTrialClass("stickyTrial");
  //       document.body.style.marginTop = "72px";
  //       setIsSticky(true);
  //       setBackgroundClass("");
  //     } else {
  //       document.body.style.marginTop = "0";
  //       setHeaderClass(`${styles.header}`);
  //       setTrialClass("");
  //       setIsSticky(false);
  //       setBackgroundClass(
  //         backgroundColor ? `${camelCase(`background ${backgroundColor}`)}` : ``
  //       );
  //     }
  //   };

  //   window.addEventListener("scroll", scrollCallBack);

  //   if (simpleHeader && simpleHeader.smartDisplayToggle === "on") {
  //     setHeaderVersion(window.location.href);
  //   } else {
  //     if (headerType === "pollen") {
  //       setHeaderVersion("/pollen");
  //     } else {
  //       setHeaderVersion("/");
  //     }
  //   }

  //   return () => {
  //     document.body.style.marginTop = "0";
  //     window.removeEventListener("scroll", scrollCallBack);
  //   };
  // }, [isMenuOpen, backgroundColor, hasHeaderShadow, noSticky, headerVersion]);

  // const logoHeight = headerType === "pollen" ? "auto" : "24px";
  // const withPollen = headerType === "pollen" ? styles.pollenHeader : null;
  // const transparentBgClass = isTransparent ? styles.transparentBg : undefined;
  // const headerClasses = `${headerClass} ${backgroundClass} ${withPollen} ${transparentBgClass}`;

  // let menuType;
  // let simpleHeaderToggleOff =
  //   simpleHeader && simpleHeader.smartDisplayToggle === "off";

  // if (simpleHeaderToggleOff || !simpleHeader) {
  //   if (headerType !== "pollen") {
  //     menuType = (
  //       <MainNavMenu
  //         backgroundColor={backgroundClass ? backgroundColor : undefined}
  //         setMenuOpen={!isSticky ? getIsMenuOpen : () => void 0}
  //         isSticky={isSticky}
  //         page={page}
  //         isTransparent={isTransparent}
  //         trialBtn={trialClass}
  //       />
  //     );
  //   } else {
  //     menuType = (
  //       <PollenNavMenu
  //         backgroundColor={backgroundClass ? backgroundColor : undefined}
  //         setMenuOpen={!isSticky ? getIsMenuOpen : () => void 0}
  //         isSticky={isSticky}
  //       />
  //     );
  //   }
  // } else {
  //   menuType = (
  //     <a
  //       className={styles.trialBtn}
  //       href={simpleHeader && simpleHeader.navCtaLink}
  //     >
  //       <div>{simpleHeader && simpleHeader.navCtaText}</div>
  //     </a>
  //   );
  // }

  // let logoType;

  // if (headerType !== "pollen") {
  //   if (alter && !isSticky) {
  //     logoType = (
  //       <div>
  //         {showWhiteLogo ? (
  //           <SimplePracticeLogoWhite />
  //         ) : (
  //           <SimplePracticeLogoBlue />
  //         )}
  //       </div>
  //     );
  //   } else {
  //     if (
  //       (backgroundColor === "blue" ||
  //         backgroundColor === "blueDim" ||
  //         backgroundColor === "purple") &&
  //       !isSticky
  //     ) {
  //       logoType = <SimplePracticeLogoWhite />;
  //     } else {
  //       logoType = <SimplePracticeLogoBlue />;
  //     }
  //   }
  // } else {
  //   logoType = <img src={PollenLogo} alt="logo" style={{ width: "64px" }} />;
  // }

  return (
    <header
      // className={headerClasses} 
      id="mainHeader">
      {/* <div className={styles.headerFlexContainer}>
        <Link
          style={{ height: logoHeight }}
          to={headerVersion}
          className={styles.pollenLogo}
        >
          {logoType}
        </Link>
        {menuType}
      </div> */}
    </header>
  );
};

export default Header;
