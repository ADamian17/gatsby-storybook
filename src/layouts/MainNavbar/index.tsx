import React from 'react'
import { Link } from 'gatsby'

import styles from './MainNavbar.module.scss';
import SvgDefs from '../../components/SvgDefs';
import MobileBtn from '../../components/MobileBtn';
import useMobileNavBtnStore from '../../zustand';
import NavMenuItem from '../../components/NavMenuItem';

const MainNavbar: React.FC = (props) => {
  const { showNav } = useMobileNavBtnStore((state) => state)
  return (
    <header className={styles.mainNavbar}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <SvgDefs fileName="defs" svg="sp-logo-blue" className={styles.logo} />
        </Link>

        <MobileBtn />
      </div>

      <nav className={`${styles.navMenuItems} ${showNav && styles.expand}`}>
        <ul className={styles.navMenuItemsList}>
          <NavMenuItem label='Products' withMenu />
          <NavMenuItem label='Features' withMenu />
          <NavMenuItem label='Professions' withMenu />
          <NavMenuItem label='Resources' withMenu />
          <NavMenuItem label='Pricing' />

          <div className={styles.navCtasWrapper}>
            <li className={styles.navMenuItem}>Sign in</li>
            <li className={styles.navMenuItem}>Start for free</li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavbar
