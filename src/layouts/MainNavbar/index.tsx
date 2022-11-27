import React from 'react'
import { Link } from 'gatsby';

import { useDispatch, useSpState } from '@hooks';
import { userActions } from '@sp-state';

const MainNavbar = () => {
  const user = useSpState((state) => state.user)
  const dispatch = useDispatch();

  const btnTxt = !user ? "login" : "logout"

  const handleClick = () => {
    if (!user) return dispatch(userActions.login())

    dispatch(userActions.logout())
  }

  return (
    <header>
      <Link to="/">home</Link>

      <nav>
        <Link to="/counter-reducer/">counter-reducer</Link>

        <button onClick={handleClick}>{btnTxt}</button>
      </nav>
    </header>
  )
}

export default MainNavbar;