import React, { useState } from "react";
import SvgDefs from "../SvgDefs";

import styles from "./NavMenuItem.module.scss"

type NavMenuItemType = {
  label: string
  withMenu?: boolean;
};

type MenuIconType = "chevron-down" | "chevron-up";

const NavMenuItem: React.FC<NavMenuItemType> = ({
  label,
  withMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuIcon: MenuIconType = isOpen ? "chevron-up" : "chevron-down";
  const isPricing = label.toLowerCase() === "pricing";

  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <li className={`${styles.navMenuItem} ${isPricing && styles.pricing}`}>
      <div className={styles.navMenuItemLabel}>
        <p>{label}</p>

        {withMenu && <SvgDefs fileName='defs' svg={menuIcon} onClick={handleClick} />}
      </div>

      {
        withMenu && (
          <>
            {
              isOpen && (
                <ul>
                  <li>item-1</li>
                  <li>item-2</li>
                  <li>item-3</li>
                  <li>item-4</li>
                  <li>item-5</li>
                  <li>item-6</li>
                </ul>
              )
            }
          </>
        )
      }
    </li>
  )
}

export default NavMenuItem;