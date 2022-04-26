import React, { useState } from 'react'
import Search from './Search/Search'
import "./NewsLeft.css"
import Newss from './Newss/Newss'

const NewsLeft = ({ dark }) => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className='NewsLeft'>
            <Search searchTerm={setSearchTerm} dark={dark} />
            <Newss searchTerm={searchTerm} dark={dark} />
        </div>
    )
}

export default NewsLeft