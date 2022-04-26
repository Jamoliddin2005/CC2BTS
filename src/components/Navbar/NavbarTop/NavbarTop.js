import React from 'react'
import Logo from './Logo'
import NavRight from './NavRight'

import "./NavbarTop.css"
const NavbarTop = ({ dark, setDark }) => {
    return (
        <div className={dark ? "NavbarTop dark-mode-bg" : "NavbarTop sun-mode"}>
            <Logo dark={dark} />
            <NavRight dark={dark} setDark={setDark} />
        </div>
    )
}

export default NavbarTop