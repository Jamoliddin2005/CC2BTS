import React from 'react'
import "./Levels.css"

const Levels = ({
    images,
    name,
    price,
    p1,
    p2,
    p3,
    p4,
    p5,
    shopping,
    setShopping,
}
) => {
    const DBlock = (e) => {
        setShopping(true)
    }
    return (
        <div className='Levels'>
            <div className="left">
                <img src={images} alt="" />
                <span onClick={DBlock}>Activate</span>
            </div>
            <div className="right">
                <h4>{name}</h4>
                <h3>Price: {price}$</h3>
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
                <p>{p4}</p>
                <p>{p5}</p>
            </div>
        </div>
    )
}

export default Levels