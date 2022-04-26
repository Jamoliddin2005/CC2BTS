import React from 'react'
import "./Update.css"

const Update = ({
    dates, p1, p2, p3, p4, dark
}) => {
    return (
        <div className={dark ? "Update dark-mode-update" : "Update"}>
            <div className="top">
                <h4>BIN BASE UPDATE</h4>
                <p>{dates}</p>
            </div>
            <div className="center">
                <p>{p1}</p>
                <p>{p2}</p>
                <p>{p3}</p>
                <p>{p4}</p>
            </div>
        </div>
    )
}

export default Update