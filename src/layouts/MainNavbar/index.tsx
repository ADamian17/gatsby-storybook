import React from 'react'
import { Link } from 'gatsby';

import { useDispatch, useSpState } from '@hooks';
import { userActions } from '@sp-state';

import styles from "./MainNavbar.module.scss";

const MainNavbar = () => {
  const user = useSpState((state) => state.user)
  const dispatch = useDispatch();

  const btnTxt = !user ? "login" : "logout"

  const handleClick = () => {
    if (!user) return dispatch(userActions.login())

    dispatch(userActions.logout())
  }

  return (
    <header className={styles.mainNavbar}>
      <Link to="/">home</Link>

      <nav className={styles.navBar}>
        <Link to="/counter-reducer/">Counter Page</Link>
        <Link to="/todos-reducer/">Todos Page</Link>

        <button onClick={handleClick}>{btnTxt}</button>
      </nav>
    </header>
  )
}

export default MainNavbar;