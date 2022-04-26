import React from 'react'
import "./ProfileTop.css"
import { Link } from "react-router-dom"
const ProfileTop = ({
    balance,
    setBalance,
    transactions,
    setTransactions,
    security,
    setSecurity,
    dark
}) => {

    const balancee = (e) => {
        e.preventDefault()
        setBalance(true)
        setTransactions(false)
        setSecurity(false)
    }
    const Transactionss = (e) => {
        e.preventDefault()
        setTransactions(true)
        setBalance(false)
        setSecurity(false)
    }
    const Securityy = (e) => {
        e.preventDefault()
        setBalance(false)
        setTransactions(false)
        setSecurity(true)
    }

    return (
        <div className={dark ? "ProfileTop bg-profile-top" : "ProfileTop"}>
            <div className="top">
                <div className="left">
                    <img src="/images/admin.png" alt="" />
                    <Link to={"/shop/levels"}>All levels</Link>
                </div>
                <div className="right">
                    <h4>Login: Admin</h4>
                    <h4>Level: user <Link to={"/shop/levels"}>
                        Upgrade
                    </Link></h4>
                    <h5>Registration date: 2022-04-23 14:13:57</h5>
                    <h4>CC limit	</h4>
                    <h4>NOVBV CC limit	0/0 per 4 hour</h4>
                </div>
            </div>
            <div className="tabPane">
                <li>
                    <a href="Balance" className={balance ? "active" : ""} onClick={balancee}>Balance</a>
                </li>
                <li>
                    <a href="Transactions" className={transactions ? "active" : ""} onClick={Transactionss}>Transactions</a>
                </li>
                <li>
                    <a href="Security" className={security ? "active" : ""} onClick={Securityy}>Security</a>
                </li>
            </div>
        </div>
    )
}

export default ProfileTop