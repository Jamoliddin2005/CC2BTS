import React, { useState } from 'react'
import "./Shop.css"

const Shop = ({ shopping,
    setShopping, }) => {

    const [btc, setBtc] = useState(true)
    const [ltc, setLtc] = useState(false)
    const [bch, setBCH] = useState(false)


    const tabClickBtcHandler = (e) => {
        e.preventDefault()
        setBtc(true)
        setLtc(false)
        setBCH(false)
    }
    const tabClickLtcHandler = (e) => {
        e.preventDefault()
        setLtc(true)
        setBtc(false)
        setBCH(false)
    }
    const tabClickBchHandler = (e) => {
        e.preventDefault()
        setBCH(true)
        setLtc(false)
        setBtc(false)
    }


    const NoneBg = (e) => {
        setShopping(false)
    }

    return (
        <>
            <div className="bgShopping" onClick={NoneBg}></div>
            <div className="shop">
                <div className="tabpane">
                    <h3>TOP UP</h3>
                    <div className="tabs">
                        <ul>
                            <li>
                                <a href="btc" onClick={tabClickBtcHandler} className={btc ? "active" : ""}>
                                    <img src="/images/btc.png" alt="" />
                                    BTC</a>
                            </li>
                            <li>
                                <a href="ltc" onClick={tabClickLtcHandler} className={ltc ? "active" : ""}>
                                    <img src="/images/Ltc.png" alt="" />
                                    LTC</a>
                            </li>
                            <li>
                                <a href="bch" onClick={tabClickBchHandler} className={bch ? "active" : ""}>
                                    <img src="/images/bch.png" alt="" />
                                    BCH</a>
                            </li>
                        </ul>
                    </div>
                    <div className="panes">
                        <div className={btc ? "tab1" : "d_none"}>
                            <h4>BTC address:</h4>
                            <p>1 confirmation needed.</p>
                            <h5>Course: 1 BTC = 37935.43$</h5>
                            <h3>Attention! Course can be changed!</h3>
                        </div>
                        <div className={ltc ? "tab2" : "d_none"}>
                            <h4>LTC address: MSFD34mjfp6NJntT2WHXfQYpu3TheM3chW</h4>
                            <img src="https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=MSFD34mjfp6NJntT2WHXfQYpu3TheM3chW" alt="" />
                            <h5>1 confirmation needed.</h5>
                            <h3>Attention! Course can be changed!</h3>
                        </div>
                        <div className={bch ? "tab3" : "d_none"}>
                            <h4>BCH address: Temporarily unavailable</h4>
                            <p>1 confirmation needed.</p>
                            <h5>Course: 1 BCH = 297.62$</h5>
                            <h3>Attention! Course can be changed!</h3>
                        </div>
                        <div className="close">
                            <button onClick={NoneBg}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop