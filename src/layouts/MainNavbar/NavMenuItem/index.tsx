import React, { useState } from 'react'
import { Link } from 'gatsby'

import styles from "./NavMenuItem.module.scss";
import MenuArrow from '../MenuArrow';

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
  const [expand, setExpand] = useState(false)

  const navMenuItemStyles = `${styles.navMenuItem} ${isHover && styles.isHover} ${isPricing && styles.isPricing}`


  /* Methods */
  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsHover(prev => !prev)
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setExpand(prev => !prev)
  }

  /* ui conditionals */
  const menuArrow = withMenu && <MenuArrow expand={expand} />

  return (
    <Link
      to="/#"
      className={navMenuItemStyles}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={styles.labelContainer} onClick={handleClick}>
        <p className={styles.label}>{label}</p>
        {menuArrow}
      </div>

      {
        withMenu && expand && (
          <menu className={`${styles.submenu}`}>
            <li>items-1</li>
            <li>items-2</li>
            <li>items-3</li>
            <li>items-4</li>
            <li>items-5</li>
            <li>items-6</li>
            <li>items-6</li>
            <li>items-6</li>
            <li>items-6</li>
            <li>items-6</li>
            <li>items-6</li>
            <li>items-6</li>
            <li>items-6</li>
            <li>items-6</li>
            <li>items-6</li>
            <li>items-6</li>
            <li>items-6</li>
          </menu>
        )
      }
    </Link>
  )
}

export default NavMenuItem