import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import styles from './MainNavbar.module.scss';
import SvgDefs from '../../components/SvgDefs';
import MobileBtn from '../../components/MobileBtn';
import useMobileNavBtnStore from '../../zustand';
import NavMenuItem from '../../components/NavMenuItem';
import { usePageOffset, useWindowSize } from '@hooks';

type MainNavbarType = {
  isHomePage?: boolean
}

const MainNavbar: React.FC<MainNavbarType> = ({ isHomePage }) => {
  const { showNav, resetShowNav } = useMobileNavBtnStore((state) => state)
  const { y: pageOffsetY } = usePageOffset()
  const { width: windowWidth } = useWindowSize()
  const [isSticky, setIsSticky] = useState(false)
  const isMobile = windowWidth < 768;

  useEffect(() => {
    if (!showNav && pageOffsetY > 200) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }

    if (showNav && windowWidth > 768) {
      resetShowNav()
    }
  }, [pageOffsetY, windowWidth])


  const headerStyles = `${styles.mainNavbar} ${isSticky && styles.isSticky} ${showNav && styles.isOpen}`
  const showCta = !isHomePage && isSticky;
  const ctaWrapper = isMobile ? (
    <div className={styles.ctasWrapper}>
      <a href={"/#"} className={styles.cta}>Sign in</a>
      <a href={"/#"} className={styles.cta}>Try it free</a>
    </div>
  ) : (
    <>
      <a href={"/#"}>Sign in</a>
      {
        showCta && <a href={"/#"}>Try it free</a>
      }
    </>
  )
  console.log({ isMobile });

  return (
    <header className={headerStyles}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <SvgDefs fileName="defs" svg="sp-logo-blue" className={styles.logo} />
        </Link>

        <MobileBtn className={styles.menuBtn} />
      </div>

      <nav className={styles.navMenuItems}>
        <a href={"/#"}>Products</a>
        <a href={"/#"}>Features</a>
        <a href={"/#"}>Professions</a>
        <a href={"/#"}>Resources</a>
        <a href={"/#"}>Pricing</a>
        {ctaWrapper}
      </nav>

      {/* 
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
      </nav> */}
    </header>
  )
}

export default MainNavbar
