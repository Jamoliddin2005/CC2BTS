import React from 'react'
import "./Search.css"
const Search = ({ searchTerm, dark }) => {
    return (
        <input className={dark ? "searchInput dark-mode-bg-input" : "searchInput"} type="text" name="" id="" placeholder='Search database, geo or seller ...' onChange={event => { searchTerm(event.target.value) }} />
    )
}

export default Search