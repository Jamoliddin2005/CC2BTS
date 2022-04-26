import React from 'react'
import "./Trusted.css"

const Trusted = ({ dark }) => {

    const URL = window.location.host
    const News = "https://t.me/localhost3000"

    return (
        <div className={dark ? "TrustedLinks dark-mode-trusted" : "TrustedLinks"}>
            <div className="top">
                <h4>TRUSTED LINKS</h4>
            </div>
            <div className="center">
                <p>URL: <a href={URL}>{URL}</a></p>
                <p>NEWS: <a href={News}>{News}</a></p>
            </div>
        </div>
    )
}

export default Trusted