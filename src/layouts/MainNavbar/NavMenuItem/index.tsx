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
    <li className={styles.menuItem}>
      <span>{label}</span>

      <menu className={styles.submenu}>
        <li>{label} Submenu</li>
      </menu>
    </li>
  )
}

export default NavMenuItem