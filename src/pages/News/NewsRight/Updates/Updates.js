import React from 'react'
import Update from './Update/Update'
import "./Updates.css"
const Updates = ({ dark }) => {

    const Updates = [
        {
            dates: "2022-02-28 23:53:40",
            p1: "5 AMEX NO SAFEKEY",
            p2: "5 BINS NOVBV",
            p3: "ZENPAY",
            p4: " WORLD GOD BINS"
        },
        {
            dates: "2022-02-24 22:24:46",
            p1: "USA NON VBV",
            p2: "USA AUTO VBV",
            p3: "BRAZIL AUTO VBV",
            p4: "CANADA AUTO VBV"
        },
        {
            dates: "2022-02-22 04:17:26",
            p1: "Market France ( ogone )",
            p2: "APPLE PAY",
        },
    ]

    return (
        <div className='Updates' >
            {Updates.map((item, index) => (
                <Update dark={dark} key={index} dates={item.dates} p1={item.p1} p2={item.p2} p3={item.p3} p4={item.p4} />
            ))}
        </div>
    )
}

export default Updates