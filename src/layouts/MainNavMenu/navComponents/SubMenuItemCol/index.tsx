import React, { useContext } from "react";
import {
  headerHoverIn,
  headerHoverOut,
} from "../../../../../assets/util-scripts/header-hover";
import { MenuItemType } from "../../../../../assets/Types";
import { NavCtx } from "../../context";
import SpLink from "../../../../shared/SpLink";
import SubMenuItem from "../SubMenuItem";

type SubMenuItemColType = {
  category: string;
  isProductsGrid?: boolean;
  isSpecialtiesColumnsStyles?: boolean;
  isSubCol?: boolean;
  isSubGrid?: boolean;
  items: MenuItemType[];
  label?: string;
};

/** Depending on your use case, you will need to pass one or a combination of the four props that handle the submenuItem layout
 * @param {Boolean} isProductsGrid
 * @param {Boolean} isSpecialtiesColumnsStyles
 * @param {Boolean} isSubGrid
 * @param {Boolean} isSubCol
 */

const SubMenuItemCol: React.FC<SubMenuItemColType> = ({
  category,
  isProductsGrid,
  isSpecialtiesColumnsStyles,
  isSubCol,
  isSubGrid,
  items,
  label = "blank",
}) => {
  const { navStyles } = useContext(NavCtx);

  const productsGridStyles = isProductsGrid ? navStyles.productsGrid : null;
  const subColStyles = isSubCol ? navStyles.subCol : null;
  const subGridStyles = isSubGrid ? navStyles.subGrid : null;
  const specialtiesColumnsStyles = isSpecialtiesColumnsStyles
    ? navStyles.specialtiesColumns
    : null;

  const itemsList =
    items &&
    items.map(item => (
      <SubMenuItem key={item.id} content={item} category={category} />
    ));

  return (
    <li
      data-testid="sub-menu-item-col"
      onMouseEnter={headerHoverIn}
      onMouseLeave={headerHoverOut}
      className={`${subColStyles} ${subGridStyles} ${specialtiesColumnsStyles} ${productsGridStyles}`}
    >
      <SpLink data-testid="sub-menu-item-col-label" path="#/">
        {label}
      </SpLink>

      <ul data-testid="sub-menu-item-col-items" className={navStyles.subMenu}>
        {itemsList}
      </ul>
    </li>
  );
};

export default SubMenuItemCol;
