import React from "react";
import { ProfessionsMenuQuery } from "@StaticQueries";
import {
  MenuItem,
  MenuItemlabelType,
  SubMenuItemCol,
  SubMenuItemCopy,
  SubMenuItemImage,
} from "../../navComponents";

export const ProfessionsMenu: React.FC<MenuItemlabelType> = ({
  menuItemlabel,
}) => {
  const {
    menuItemContent: { copy, withCopy, image },
    menuItems: { nodes },
  } = ProfessionsMenuQuery();

  return (
    <MenuItem label={menuItemlabel}>
      <SubMenuItemCopy
        withCopy={withCopy}
        menuItemHeadline={copy.menuItemHeadline}
        menuItemSubheadline={copy.menuItemSubheadline}
      />

      <SubMenuItemCol
        category={menuItemlabel}
        items={nodes}
        isSubGrid
        isSpecialtiesColumnsStyles
      />

      <SubMenuItemImage image={image} variant="without-link" />
    </MenuItem>
  );
};

export default ProfessionsMenu;
