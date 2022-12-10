import React from "react";
import { ProductsMenuQuery } from "@StaticQueries";
import {
  MenuItem,
  MenuItemlabelType,
  SubMenuItemCol,
  SubMenuItemCopy,
  SubMenuItemImage,
} from "../../navComponents";

export const ProductsMenu: React.FC<MenuItemlabelType> = ({
  menuItemlabel,
}) => {
  const {
    menuItemContent: { copy, withCopy, image },
    menuItems: { nodes },
  } = ProductsMenuQuery();

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
        isProductsGrid
      />

      <SubMenuItemImage image={image} />
    </MenuItem>
  );
};

export default ProductsMenu;
