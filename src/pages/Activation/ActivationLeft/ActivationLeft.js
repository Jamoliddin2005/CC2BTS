import React from 'react'
import "./ActivationLeft.css"
const ActivationLeft = ({ dark, shopping,
    setShopping }) => {


    const ShopPing = (e) => {
        if (shopping) {
            setShopping(false)
        } else {
            setShopping(true)
        }
        console.log(shopping);
    }


    return (
        <div className={dark ? "ActivationLeft dark-mode-activation" : "ActivationLeft"}>
            <div className="top">
                <h4>Your account not active</h4>
            </div>
            <div className="center">
                <div className="alert-error">
                    <p>Money for account activation and upgrading level will go to your balance and will be available for shopping in the store.</p>
                </div>
                <h5>
                    Invitation works 24 hours from creating date. After that, non-activated accounts will be deleted.
                </h5>
                <div className="alert-success">
                    <p>You need activate your account.
                    </p>
                    <p>Gold level - 1500$
                    </p>
                    <p>Silver level - 750$
                    </p>
                    <p>Bronze level - 300$
                    </p>
                    <p>Aluminium level - 30$
                    </p>
                </div>

                <button onClick={ShopPing}>Top up</button>
            </div>
        </div>
    )
}

export default ActivationLeft