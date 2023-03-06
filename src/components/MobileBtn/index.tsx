import React from 'react'

import SvgDefs from '../SvgDefs'
import useShowNavStore from '../../zustand/useShowNavStore';

import styles from "./MobileBtn.module.scss";

type MobileBtnType = {
  className?: string
}

const MobileBtn: React.FC<MobileBtnType> = ({ className }) => {
  const showNav = useShowNavStore((state) => state.showNav)
  const setShowNav = useShowNavStore((state) => state.setShowNav)
  const svg = showNav ? "mob-icon-close" : "mob-icon-open"

  const handleClick = () => {
    setShowNav(!showNav)
  }

  return (
    <button
      onClick={handleClick}
      className={`${styles.mobBtn} ${showNav && styles.isClose} ${className}`}
    >
      <SvgDefs fileName="defs" svg={svg} />
    </button>
  )
}

export default MobileBtn