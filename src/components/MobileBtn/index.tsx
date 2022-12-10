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
    <button className={`${styles.mobBtn} ${className}`} onClick={handleClick}>
      <SvgDefs fileName="defs" svg={svg} />
    </button>
  )
}

export default MobileBtn