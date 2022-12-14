import React from 'react'

type MenuArrowType = {
  expand: boolean
}

const MenuArrow: React.FC<MenuArrowType> = ({ expand }) => {
  return (
    <svg width="22" height="14" xmlns="http://www.w3.org/2000/svg">
      {
        expand ? (
          <use xlinkHref='/icons/navbar-icons.svg#chevron-up' />
        ) : (
          <use xlinkHref='/icons/navbar-icons.svg#chevron-down' />
        )
      }
    </svg>
  )
}

export default MenuArrow