import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Shop from '../../components/Shop/Shop'
import "./Activation.css"
import ActivationLeft from './ActivationLeft/ActivationLeft'
import ActivationRight from './ActivationRight/ActivationRight'

const Activation = ({
    dark,
    setDark,
    shopping,
    setShopping,
    levels,
}) => {
    return (
        <>
            <Navbar
                dark={dark}
                setDark={setDark}
            />
            {shopping ? (<Shop
                shopping={shopping}
                setShopping={setShopping}
            />) : ("")}

            <div className="activation">
                <ActivationLeft
                    dark={dark}
                    setShopping={setShopping}
                    shopping={shopping}
                />
                <ActivationRight
                    shopping={shopping}
                    dark={dark}
                    setShopping={setShopping}
                    levels={levels}
                />
            </div>
        </>
    )
}

export default Activation