import React from 'react'
import NavMenuItem from '../NavMenuItem';

import styles from "./CtaWrapper.module.scss"

type CtasWrapperType = {
  isMobile: boolean;
  withCta: boolean;
  className?: string;
}

const CtasWrapper: React.FC<CtasWrapperType> = ({ isMobile, className, withCta }) => {
  const ctas = isMobile ? (
    <div className={`${styles.ctasContainer} ${className}`}>
      <a href={"/#"} className={styles.cta}>Sign in</a>
      <a href={"/#"} className={styles.cta}>Try it free</a>
    </div>
  ) : (
    <>
      <NavMenuItem label='Sign in' />
      {
        withCta && (
          <NavMenuItem label='Try it free' />
        )
      }
    </>
  )

  return ctas
}

export default CtasWrapper