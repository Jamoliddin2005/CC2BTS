import React from 'react'
import "./Security.css"
const Security = ({ dark }) => {
    return (
        <div className=
            {dark ? "Security cardbottom ProfileBottom-dark" : "Security cardbottom"}
        >
            <form action="">
                <label htmlFor="new">New Password</label>
                <input type="text" name="" id="new" placeholder='New Password' />
                <label htmlFor="confirm">Confirm new password</label>
                <input type="text" name="" id="confirm" placeholder='Confirm new password' />
                <label htmlFor="old">Old password</label>
                <input type="text" name="" id="old" placeholder='Old password' />
                <button disabled>Save</button>
            </form>
        </div>
    )
}

export default Security