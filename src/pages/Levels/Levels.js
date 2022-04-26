import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Shop from '../../components/Shop/Shop'
import Level from './Level/Level'
import "./Levels.css"
const Levels = ({
    dark,
    setDark,
    levels,
    shopping,
    setShopping, }) => {
    return (
        <>
            <Navbar dark={dark}
                setDark={setDark} />
            {shopping ? (<Shop
                shopping={shopping}
                setShopping={setShopping}
            />) : ("")}
            <div className='LevelsBig' >
                <div className={dark ? "LevelsBigTop LevelsBigTop-dark-bg" : "LevelsBigTop"}>
                    <div className="top">
                        <h4>Levels</h4>
                    </div>
                    <div className="center">
                        <div className="alert-danger">
                            <p>Money for upgrading level will go to your balance and will be available for shopping in the store.</p>
                        </div>
                        <h5>Refill the balance with an amount equal to the price of the level. To automatically update the level, you need to pay in one transaction. If you will divide your payment in several transactions just write to support for manual level upgrade. In this case, the transaction period should not be more than two hours</h5>
                        <button onClick={(e) => setShopping(true)}>Top up</button>
                    </div>
                </div>
                <div className="levelsBottomBig">
                    {levels.map((item, index) => (
                        <Level setShopping={setShopping} key={index} name={item.name}
                            images={item.images} price={item.price}
                            p1={item.p1}
                            p2={item.p2}
                            p3={item.p3}
                            p4={item.p4}
                            p5={item.p5}
                            dark={dark}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Levels