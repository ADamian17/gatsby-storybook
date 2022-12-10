import React, { useContext } from "react";

import { NavCtx } from "../../context";

type SubMenuItemCopyType = {
  menuItemHeadline: string;
  menuItemSubheadline: string;
  withCopy: boolean;
};

const SubMenuItemCopy: React.FC<SubMenuItemCopyType> = ({
  menuItemHeadline,
  menuItemSubheadline,
  withCopy,
}) => {
  const { navStyles } = useContext(NavCtx);

  return (
    <>
      {withCopy && (
        <li
          data-testid="sub-menu-item-copy"
          className={`${navStyles.subCol} ${navStyles.subColSpecialties} ${navStyles.subColProducts}`}
        >
          <a data-testid="sub-menu-item-copy-headline" href="#/">
            {menuItemHeadline}
          </a>

          <ul className={navStyles.subMenu}>
            <li className={`${navStyles.subMenuItem} ${navStyles.subMenuCopy}`}>
              <a href="/#">
                <div data-testid="sub-menu-item-copy-subheadline">
                  {menuItemSubheadline}
                </div>
              </a>
            </li>
          </ul>
        </li>
      )}
    </>
  );
};

export default SubMenuItemCopy;
