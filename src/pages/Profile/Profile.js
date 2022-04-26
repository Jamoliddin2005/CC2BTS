import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Profile.css"
import ProfileBottom from './ProfileBottom/ProfileBottom'
import ProfileTop from './ProfileTop/ProfileTop'
const Profile = ({ dark, setDark, shopping,
    setShopping, }) => {

    const [balance, setBalance] = useState(true)
    const [transactions, setTransactions] = useState(false)
    const [security, setSecurity] = useState(false)

    return (
        <div className={dark ? "ProfileBig bg-dark-profile" : "ProfileBig"}>
            <Navbar dark={dark} setDark={setDark} />
            <ProfileTop
                balance={balance}
                setBalance={setBalance}
                transactions={transactions}
                setTransactions={setTransactions}
                security={security}
                setSecurity={setSecurity} dark={dark}
            />
            <ProfileBottom
                balance={balance}
                setBalance={setBalance}
                transactions={transactions}
                setTransactions={setTransactions}
                security={security}
                setSecurity={setSecurity}
                shopping={shopping}
                setShopping={setShopping} dark={dark}
            />
        </div>
    )
}

export default Profile