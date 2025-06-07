import React from 'react'
import { Slash, Search }
from "lucide-react";
import '../css/home.css'
import { useState } from 'react';


const SearchBox = () => {
    const [toggle, setToggle] = useState(false)
    
    const handleClick = () => {
        setToggle(!toggle)
    }
  return (
    <div>
        <div className="glass" onClick={handleClick}>
            <Search size={14} className='icon'/>
            <span className='text-[12px]'>Type</span>
            <div className='searchBox'>
                <Slash size={10} className='icon'/>
            </div>
            <span className='text-[12px]'>to search</span>
        </div>

        {/* {toggle  && (
            <div className='searchInputBox'>
                <input type="text" className='inputSearch' />
            </div>
        )} */}
    </div>
  )
}

export default SearchBox