import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import styles from './MainNavbar.module.scss';
import SvgDefs from '../../components/SvgDefs';
import MobileBtn from '../../components/MobileBtn';
import useMobileNavBtnStore from '../../zustand';
import NavMenuItem from './NavMenuItem';
import { usePageOffset, useWindowSize } from '@hooks';
import CtasWrapper from './CtasWrapper';

type MainNavbarType = {
  backgroundColor?: "blue" | "blueDim";
  isHomePage?: boolean
  isTransparent?: boolean;
  noSticky?: boolean;
}

const MainNavbar: React.FC<MainNavbarType> = ({ isHomePage, noSticky }) => {
  const { showNav, resetShowNav } = useMobileNavBtnStore((state) => state)
  const { y: pageOffsetY } = usePageOffset()
  const { width: windowWidth } = useWindowSize()
  const [isSticky, setIsSticky] = useState(false)
  const isMobile = windowWidth < 768;

  useEffect(() => {
    if (!noSticky && !showNav && pageOffsetY > 200) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }

    if (showNav && windowWidth > 768) {
      resetShowNav()
    }
  }, [pageOffsetY, windowWidth])


  const headerStyles = `${styles.mainNavbar} ${isSticky && styles.isSticky} ${showNav && styles.isOpen}`
  const withCta = !isHomePage && isSticky;

  return (
    <header className={headerStyles}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <SvgDefs fileName="defs" svg="sp-logo-blue" className={styles.logo} />
        </Link>

        <MobileBtn className={styles.menuBtn} />
      </div>

      <nav className={styles.navMenuItems}>
        <NavMenuItem label='Products' />
        <NavMenuItem label='Features' />
        <NavMenuItem label='Professions' />
        <NavMenuItem label='Resources' />
        <NavMenuItem label='Pricing' />

        <CtasWrapper isMobile={isMobile} withCta={withCta} />
      </nav>
    </header>
  )
}

export default MainNavbar
