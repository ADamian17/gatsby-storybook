import React from 'react'
import { Link } from 'gatsby'

import styles from "./NavMenuItem.module.scss";

type NavMenuItemType = {
  label: string
}

export const NavMenuItem: React.FC<NavMenuItemType> = ({ label }) => {
  return (
    <Link to="/#" className={styles.navMenuItem}>
      <div>
        <p>{label}</p>
      </div>
    </Link>
  )
}

export default NavMenuItem