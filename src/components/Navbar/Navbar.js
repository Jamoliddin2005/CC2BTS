import React from 'react'
import NavbarBottom from './NavbarBottom/NavbarBottom'
import NavbarTop from './NavbarTop/NavbarTop'
import "./Navbar.css"
const Navbar = ({
    dark,
    setDark
}) => {
    return (
        <nav className={dark ? "dark-mode-bg" : "sun-mode"}>
            <NavbarTop dark={dark} setDark={setDark} />
            <NavbarBottom dark={dark} />
        </nav>
    )
}

export default Navbar