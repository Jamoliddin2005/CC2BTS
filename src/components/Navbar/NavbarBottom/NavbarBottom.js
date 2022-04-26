import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarBottom.css"
import { FaRegNewspaper, FaRegCreditCard } from "react-icons/fa"
import { FiCreditCard } from "react-icons/fi"
import { BsChevronDown } from "react-icons/bs"

const NavbarBottom = ({ dark }) => {


    const stoped = (e) => {
        e.preventDefault()
    }

    return (
        <div className={dark ? "NavbarBottom dark-mode-bg darkmode_border" : "NavbarBottom"}>
            <ul>
                <li className='nav_li'>
                    <Link to="/news">
                        <FaRegNewspaper />
                        News
                    </Link>
                </li>
                <li className='nav_li'>
                    <Link to="/" onClick={stoped}>
                        <FiCreditCard />
                        Cards
                        <BsChevronDown />
                    </Link>
                    <div className="position">
                        <span>
                            <Link to="/shop/activation">
                                Buy CC
                            </Link>
                        </span>
                        <span>
                            <Link to="/add">
                                Create Cards
                            </Link>
                        </span>
                    </div>
                </li>
                <li className='nav_li'>
                    <Link to="/" onClick={stoped}>
                        <FaRegCreditCard />
                        Dumbs
                        <BsChevronDown />
                    </Link>
                    <div className="position">
                        <span>
                            <Link to="/shop/activation">
                                Buy CC
                            </Link>
                        </span>
                        <span>
                            <Link to="/add">
                                Create Cards
                            </Link>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default NavbarBottom