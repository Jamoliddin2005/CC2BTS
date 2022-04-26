import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Add.css"

const Add = ({ dark, setDark }) => {
    return (
        <>
            <Navbar
                dark={dark}
                setDark={setDark}
            />
            <div className='add'>
                <form action="" className={dark ? "dark-form-mode" : ""}>
                    <label htmlFor="Name" >Product Name</label>
                    <input type="text" name="" id="Name" placeholder='Product Name' />
                    <label htmlFor="Price" >Product Price</label>
                    <input type="text" name="" id="Price" placeholder='Product Image' />
                    <label htmlFor="img" >Product Image</label>
                    <input type="file" name="" id="img" placeholder='Product Image' />
                    <label htmlFor="textarea" >Product More</label>
                    <textarea name="" id="textarea" rows="10"></textarea>
                    <button>Create Product</button>
                </form>
            </div>
        </>
    )
}

export default Add