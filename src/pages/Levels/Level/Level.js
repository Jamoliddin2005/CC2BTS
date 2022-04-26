import React from 'react'
import "./Level.css"
const Level = ({
    images,
    name,
    price,
    p1,
    p2,
    p3,
    p4,
    p5,
    setShopping, dark
}) => {
    return (
        <div className={dark ? "Level Level-dark-bg" : "Level"}>
            <div className="top">
                <h4>{name}</h4>
            </div>
            <div className="center">
                <div className="image">
                    <img src={images} alt="" />
                    <span onClick={(e) => setShopping(true)}>Upgrade</span>
                </div>
                <div className="texts">
                    <h4>Price: {price}$</h4>
                    <h4>Upgrade price: {price}$</h4>
                    <p>{p1}</p>
                    <p>{p2}</p>
                    <p>{p3}</p>
                    <p>{p4}</p>
                    <p>{p5}</p>
                </div>
            </div>
        </div>
    )
}

export default Level