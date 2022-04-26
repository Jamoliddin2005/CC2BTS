import React from 'react'
import "./Balance.css"
const Balance = ({
    shopping,
    setShopping,
    dark,
}) => {

    const addBalance = (e) => {
        e.preventDefault()
        setShopping(true)
    }

    return (
        <div className={dark ? "balance cardbottom ProfileBottom-dark" : "balance cardbottom"}>
            <p>Balance: 0.00 USD</p>
            <button onClick={addBalance}>Add balance</button>
        </div>
    )
}

export default Balance