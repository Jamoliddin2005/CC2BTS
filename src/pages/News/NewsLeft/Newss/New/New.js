import React from 'react'
import { Link } from 'react-router-dom'
import "./New.css"

const New = ({ name,
    Refund,
    total,
    price, dark }) => {
    return (
        <div className={dark ? "New dark-mode-new" : "New"}>
            <Link to={"/shop/activation"}>{name}</Link>
            <p>Rufund: <span>{Refund}</span></p>
            <p>Total: {total}</p>
            <p>Price: {price}</p>
        </div>
    )
}

export default New