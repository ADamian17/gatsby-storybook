import React, { useContext } from "react";
import { Cookie } from "../../../../../utils";
import { mxpNavClicked } from "../../../../../utils/mixpanelEvents/mixpanelEvents";
import SpLink from "../../../../shared/SpLink";
import { NavCtx } from "../../context";

export type PrimaryMenuType = {
  label: string;
  path: string;
  target?: string;
  [key: string]: any;
};

export const PrimaryMenu: React.FC<PrimaryMenuType> = ({
  label,
  path,
  target,
  ...rest
}) => {
  const { navStyles } = useContext(NavCtx);
  const distinctId = JSON.parse(
    decodeURIComponent(Cookie.getCookie(process.env.GATSBY_MIXPANEL_ID))
  )?.distinct_id;

  return (
    <li
      onClick={() => {
        let navigationUrlPath = "",
          navigationCategoryText = "";
        if (path.includes("/sign_in")) {
          window.dataLayer.push({ event: "sign_in", user_id: distinctId });

          navigationUrlPath = path;
          navigationCategoryText = "Sign In";
        } else if (path.includes("/pricing")) {
          navigationUrlPath = window.location.host + path;
          navigationCategoryText = "Pricing";
        }

        window.dataLayer.push({
          event: "navigation",
          navigation_name: "header",
          navigation_url: navigationUrlPath,
          navigation_text: navigationCategoryText,
          navigation_category: navigationCategoryText,
        });

        mxpNavClicked(path, label, label);
      }}
      className={path.includes("/sign_in") ? navStyles.signInMobile : navStyles.primaryMenu}
      {...rest}
      data-testid="primary-menu"
    >
      <SpLink path={path} target={target} data-testid="primary-menu-link" className={navStyles.primaryMenuMobileLink}>
        <div data-testid="primary-menu-label">{label}</div>
      </SpLink>
    </li>
  );
};

export default PrimaryMenu;
