import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import styles from './MainNavbar.module.scss';
import SvgDefs from '../../components/SvgDefs';
import MobileBtn from '../../components/MobileBtn';
import useMobileNavBtnStore from '../../zustand';
import NavMenuItem from '../../components/NavMenuItem';
import { usePageOffset, useWindowSize } from '@hooks';

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

  return (
    <header className={headerStyles}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <SvgDefs fileName="defs" svg="sp-logo-blue" className={styles.logo} />
        </Link>

        <MobileBtn className={styles.menuBtn} />
      </div>

      <nav className={styles.navMenuItems}>
        <a href={"/#"}>
          <div>
            <h3>Products</h3>
            <span>icon</span>
          </div>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </a>
        <a href={"/#"}>
          <div>
            <h3>Features</h3>
            <span>icon</span>
          </div>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </a>
        <a href={"/#"}>
          <div>
            <h3>Professions</h3>
            <span>icon</span>
          </div>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </a>
        <a href={"/#"}>
          <div>
            <h3>Resources</h3>
            <span>icon</span>
          </div>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </a>
        <a className={styles.isPricing} href={"/#"}>Pricing</a>
        {ctaWrapper}
      </nav>
    </header>
  )
}

export default MainNavbar
