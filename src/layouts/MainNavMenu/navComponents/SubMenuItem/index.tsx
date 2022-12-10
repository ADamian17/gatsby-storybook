import React, { useContext } from "react";
import {
  headerHoverIn,
  headerHoverOut,
} from "../../../../../assets/util-scripts/header-hover";

import { MenuItemType } from "../../../../../assets/Types/MainNavMenuItemsTypes";
import { NavCtx } from "../../context";
import SpLink from "../../../../shared/SpLink";
import { mxpNavClicked } from "../../../../../utils/mixpanelEvents/mixpanelEvents";

type SubMenuItemType = {
  content: MenuItemType;
  category: string;
};

export const SubMenuItem: React.FC<SubMenuItemType> = ({
  content: { label, description, path, target },
  category,
}) => {
  const { navStyles } = useContext(NavCtx);

  const handleClick = (locationPath: string) => {
    mxpNavClicked(path, label, category);

    const navigationText = new DOMParser().parseFromString(label, "text/html")
      .documentElement.textContent;

    window.dataLayer.push({
      event: "navigation",
      navigation_name: "header",
      navigation_url: window.location.host + locationPath,
      navigation_text: navigationText,
      navigation_category: path.split("/")[1],
    });
  };

  return (
    <li
      data-testid="sub-menu-item"
      onMouseEnter={headerHoverIn}
      onMouseLeave={headerHoverOut}
      className={navStyles.subMenuItem}
      onClick={() => handleClick(path)}
    >
      <SpLink path={path} target={target} data-testid="sub-menu-item-link">
        <div
          data-testid="sub-menu-item-label"
          dangerouslySetInnerHTML={{ __html: label }}
        />

        <p
          data-testid="sub-menu-item-description"
          className={navStyles.menuItemDescription}
        >
          {description}
        </p>
      </SpLink>
    </li>
  );
};

export default SubMenuItem;
