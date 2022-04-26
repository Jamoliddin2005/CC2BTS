import React from 'react'
import "./Transactions.css"
const Transactions = ({ dark }) => {
  return (
    <div className=
      {dark ? "Transactions cardbottom ProfileBottom-dark" : "Transactions cardbottom"}
    >
      <div className="CURRENCY"><p>CURRENCY</p></div>
      <div className="AMOUNT"><p>AMOUNT</p></div>
      <div className="USD"><p>USD</p></div>
      <div className="COURSE"><p>COURSE</p></div>
      <div className="CONFIRMATIONS"><p>CONFIRMATIONS</p></div>
      <div className="DATE"><p>DATE</p></div>
    </div>
  )
}

export default Transactions