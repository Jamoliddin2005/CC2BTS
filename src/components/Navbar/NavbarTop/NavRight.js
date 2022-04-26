import React from 'react'
import { Link } from "react-router-dom"
import { BsMoon } from "react-icons/bs"
import { FiBell, FiShoppingCart } from "react-icons/fi"
import { BsSun } from "react-icons/bs"
import Profile from './Profile'

const NavRight = ({ dark, setDark }) => {

  const DarkMode = (e) => {
    e.preventDefault()
    if (dark) {
      setDark(false)
    } else {
      setDark(true)
    }
  }

  return (
    <div className={dark ? "NavbarRight dark-mode-bg" : "NavbarRight sun-mode"}>
      <Link to={"/"} onClick={DarkMode}>
        {dark ? (
          <BsSun />
        ) : (
          <BsMoon />
        )}
      </Link>
      <Link to={"/shop/activation"}>
        <FiBell />
      </Link>
      <Link to={"/shop/activation"} className="shoppingUrl">
        <FiShoppingCart />
        <span>0</span>
      </Link>
      <Link to={"/profile"} className="profileurl">
        <Profile />
      </Link>
    </div >
  )
}

export default NavRight