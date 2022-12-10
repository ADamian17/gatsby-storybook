import React, { useContext, useState, useEffect } from "react";
import { useWindowSize } from "@hooks";
import { NavCtx } from "../../context";

type MenuItemType = {
  label: string;
  className?: string;
  isResourcesMenu?: boolean;
  children: React.ReactNode;
};

const MenuItem: React.FC<MenuItemType> = ({
  label,
  className,
  isResourcesMenu,
  children,
}) => {
  const { navStyles } = useContext(NavCtx);
  const [showMenu, setShowMenu] = useState(false);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    if (windowWidth > 768) {
      setShowMenu(false);
    }

    return () => {
      setShowMenu(false);
    };
  }, [windowWidth]);

  const subMenuDoubleStyle = isResourcesMenu
    ? navStyles.resourcesSubMenu
    : navStyles.subMenuDouble;

  const subMenuStyles = showMenu
    ? `${navStyles.submenuActive} ${navStyles.subMenu}`
    : `${navStyles.subMenu}`;

  const subMenuLabelChevronStyles = showMenu
  ? `${navStyles.primaryMenuMobileActiveLabel} ${navStyles.primaryMenuMobile}`
  : `${navStyles.primaryMenuMobile}`;

  const menuItemChildren = !isResourcesMenu ? (
    <div className={navStyles.globalFeaturesWrapper}>
      <ul data-testid="menu-item-submenu" className={subMenuStyles}>
        {children}
      </ul>
    </div>
  ) : (
    <ul data-testid="menu-item-submenu" className={subMenuStyles}>
      {children}
    </ul>
  );

  const handleOpenSubmenu = () => {
    if (windowWidth < 768) {
      setShowMenu(!showMenu);
    }
  };

  return (
    <li
      data-testid="menu-item"
      className={`${navStyles.primaryMenu} ${subMenuDoubleStyle} ${navStyles.subMenuTrigger} ${className}`}
    >
      <a data-testid="menu-item-label" href="#/" className={subMenuLabelChevronStyles} onClick={handleOpenSubmenu}>
        {label}
      </a>

      {menuItemChildren}
    </li>
  );
};

export default MenuItem;
