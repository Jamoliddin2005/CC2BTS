import React from 'react'
import Balance from './Balance/Balance'
import Transactions from './Transactions/Transactions'
import "./ProfileBottom.css"
import Security from '../Security/Security'
import Shop from '../../../components/Shop/Shop'



const ProfileBottom = ({
    balance,
    transactions,
    security,
    shopping,
    setShopping, dark
}) => {


    return (
        <div className="ProfileBottom">
            {balance ? <Balance dark={dark} shopping={shopping}
                setShopping={setShopping} /> : null}
            {shopping ? (<Shop
                shopping={shopping}
                setShopping={setShopping}
            />) : ("")}
            {transactions ? <Transactions dark={dark} /> : null}
            {security ? <Security dark={dark} /> : null}
        </div>
    )
}

export default ProfileBottom