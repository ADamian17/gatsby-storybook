import React from "react";
import { FeaturesMenuQuery } from "@StaticQueries";
import {
  MenuItem,
  MenuItemlabelType,
  SubMenuItemCol,
  SubMenuItemImage,
} from "../../navComponents";

const FeaturesMenu: React.FC<MenuItemlabelType> = ({ menuItemlabel }) => {
  const {
    overview,
    features,
    menuItemContent: { image, idVideo },
  } = FeaturesMenuQuery();

  return (
    <MenuItem label={menuItemlabel}>
      <SubMenuItemCol
        items={overview.nodes}
        label="Overview"
        isSubCol
        category={menuItemlabel}
      />
      <SubMenuItemCol
        items={features.nodes}
        label="Features"
        isSubGrid
        category={menuItemlabel}
      />

      <SubMenuItemImage image={image} variant="with-video" idVideo={idVideo} />
    </MenuItem>
  );
};

export default FeaturesMenu;
