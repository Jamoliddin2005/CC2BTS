import React from 'react'
import { Link } from "react-router-dom"
const Logo = ({ dark }) => {
    return (
        <div className='logo'>
            <Link to="/shop/activation">
                {dark ?
                    <img src="/images/logo-2-light.png" alt="" /> : <img src="/images/logo-2-dark.png" alt="" />
                }
            </Link>
        </div>
    )
}

export default Logo