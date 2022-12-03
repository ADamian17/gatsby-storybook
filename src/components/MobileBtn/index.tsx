import React, { useState } from 'react'
import useMobileNavBtnStore from '../../zustand';
import SvgDefs from '../SvgDefs'

import styles from "./MobileBtn.module.scss";

const MobileBtn = () => {
  const [isClose, setIsClose] = useState(false)
  const { setShowNav } = useMobileNavBtnStore((state) => state)
  const btnContent = isClose ? (
    <SvgDefs fileName="defs" svg="mob-icon-close" />
  ) : (
    <SvgDefs fileName="defs" svg="mob-icon-open" />
  )

  const handleClick = () => {
    setIsClose(prev => {
      setShowNav(!prev)
      return !prev
    })
  }
  return (
    <button className={styles.mobBtn} onClick={handleClick}>
      {btnContent}
    </button>
  )
}

export default MobileBtn