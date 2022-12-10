import React from "react";
import { ResourcesMenuQuery } from "@StaticQueries";
import { MenuItem, MenuItemlabelType, SubMenuItem } from "../../navComponents";

const ResourcesMenu: React.FC<MenuItemlabelType> = ({ menuItemlabel }) => {
  const {
    menuItems: { nodes },
  } = ResourcesMenuQuery();

  const resourcesItems = nodes.map(resourcesItem => (
    <SubMenuItem
      category={menuItemlabel}
      key={resourcesItem.id}
      content={resourcesItem}
    />
  ));

  return (
    <MenuItem label={menuItemlabel} isResourcesMenu>
      {resourcesItems}
    </MenuItem>
  );
};

export default ResourcesMenu;
