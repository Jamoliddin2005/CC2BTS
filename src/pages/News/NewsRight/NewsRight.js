import React from 'react'
import Trusted from './TrustedLinks/Trusted'
import "./NewsRight.css"
import Updates from './Updates/Updates'
const NewsRight = ({ dark }) => {
    return (
        <div className='NewsRight'>
            <Trusted dark={dark} />
            <Updates dark={dark} />
        </div>
    )
}

export default NewsRight