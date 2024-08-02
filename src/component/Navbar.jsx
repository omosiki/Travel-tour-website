import React, { useState } from 'react'
import Mdclose from "react-icons"
import { MdCopyAll } from 'react-icons/md'
const Navbar = () => {
    const [dropDown, setDropdown] = useState(false)
    const showDropdown = () => {
        setDropdown(!dropDown)
    }
  return (
    <nav className='w-full h-24 flex flex-col justify-center item-center sticky top-0 z-50 bg-white'>
      <div className='container mx-auto lg:px-3 w-full'>
        <div className='lg-w-full w-11/12 mx-auto h-full justify-between item-center'>
            <div className='flx flex-col gap-y-4'>
                <div className='flext item-center gap-x-2'>
                    <h2 className='text-bold'>Siki</h2>
                </div>
            </div>
            <ul>
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
            </ul>
            <div>
                <button>sign in</button>
                <button>sign in</button>
            </div>
            {dropDown ? ( <div onClick={showDropdown}><Mdclose/></div>) 
            : (<div onClick={showDropdown}><Mdclose/></div>)}
        </div>
        {dropDown && (
            <div>
                <div>
                <ul>
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
            </ul>
                </div>
            </div>
    )}
      </div>
    </nav>
  )
}

export default Navbar;
