import React, { useState } from 'react'
import { Link } from 'gatsby'

import styles from "./NavMenuItem.module.scss";

type NavMenuItemType = {
  isPricing?: boolean
  label: string
  withMenu?: boolean
}

export const NavMenuItem: React.FC<NavMenuItemType> = ({
  label,
  withMenu,
  isPricing
}) => {
  const [isHover, setIsHover] = useState(false)

  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHover(prev => !prev)
  }
  const navMenuItemStyles = `${styles.navMenuItem} ${isHover && styles.isHover} ${isPricing && styles.isPricing}`
  return (
    <Link
      to="/#"
      className={navMenuItemStyles}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={styles.labelContainer}>
        <p>{label}</p>
      </div>

      {
        withMenu && (
          <div className={styles.navSubmenuWrapper}>
            <div className={styles.navSubmenuItem}>
              menu  <p>{label}</p>
            </div>
          </div>
        )
      }
    </Link>
  )
}

export default NavMenuItem