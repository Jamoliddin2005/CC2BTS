import React from 'react'
import "./ActivationRight.css"
import Levels from './Levels/Levels'
const ActivationRight = ({ dark,
    shopping,
    setShopping, levels }) => {




    return (
        <div className={dark ? "ActivationRight bg-dark-activation-right" : "ActivationRight"}>
            <div className="top">
                <h4>Levels</h4>
            </div>
            <div className="center">
                {levels.map((item, index) => (
                    <Levels
                        shopping={shopping}
                        setShopping={setShopping}
                        key={index}
                        images={item.images}
                        name={item.name}
                        price={item.price}
                        p1={item.p1}
                        p2={item.p2}
                        p3={item.p3}
                        p4={item.p4}
                        p5={item.p5}
                    />
                ))}
            </div>
        </div>
    )
}

export default ActivationRight