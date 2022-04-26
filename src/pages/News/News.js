import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./News.css"
import NewsLeft from './NewsLeft/NewsLeft'
import NewsRight from './NewsRight/NewsRight'

const News = ({
    dark,
    setDark,
}) => {

    return (
        <>
            <Navbar
                dark={dark}
                setDark={setDark}
            />
            <div className="News">
                <NewsLeft dark={dark} />
                <NewsRight dark={dark} />
            </div>
        </>
    )
}

export default News