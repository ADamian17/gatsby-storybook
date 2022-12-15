import React, { useState } from 'react'
import useMobileNavBtnStore from '../../zustand';
import SvgDefs from '../SvgDefs'

import styles from "./MobileBtn.module.scss";

type MobileBtnType = {
  className?: string
}

const MobileBtn: React.FC<MobileBtnType> = ({ className }) => {
  const { showNav, setShowNav } = useMobileNavBtnStore((state) => state)
  const svg = showNav ? "mob-icon-close" : "mob-icon-open"

  const handleClick = () => {
    setShowNav(!showNav)
  }
  return (
    <button className={`${styles.mobBtn} ${showNav && styles.isClose} ${className}`} onClick={handleClick}>
      <SvgDefs fileName="defs" svg={svg} />
    </button>
    //    <button className={`${styles.mobBtn} ${showNav && styles.isClose} ${className}`} onClick={handleClick}>
    //    <div className={`${styles.bar} ${styles.barOne}`}></div>
    //    <div className={`${styles.bar} ${styles.barTwo}`}></div>
    //    <div className={`${styles.bar} ${styles.barThree}`}></div>
    //  </button>
  )
}

export default MobileBtn