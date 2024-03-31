import React from 'react'
// icons 
import { FaSearch } from "react-icons/fa";
export default function SearchBar({handleInputChange}) {
    return (
        <div className='form-group d-flex'>
            <FaSearch size={20} style={{position: "absolute", left: 25}} />
            <input className='shadow-sm' placeholder='Search' style={{ paddingLeft: "2rem" }} onChange={handleInputChange} />
        </div>
    )
}
