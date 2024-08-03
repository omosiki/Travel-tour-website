import React from 'react'
import "./navbar.css"
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoMdCloseCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";




const Navbar = () => {
  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
              <a href="" className='logo flex'>
             <h1>
             <MdOutlineTravelExplore/> 
               Travel
             </h1>
              </a>
            </div>
            <div className="navBar">
                <ul className="navLists flex">
                    <li className='navItem'>
                    <a href="" className='navLink'>Home</a>
                    </li>
                    <li className='navItem'>
                    <a href="" className='navLink'>Packages</a>
                    </li>
                    <li className='navItem'>
                    <a href="" className='navLink'>Shop</a>
                    </li>
                    <li className='navItem'>
                    <a href="" className='navLink'>About</a>
                    </li>
                    <li className='navItem'>
                    <a href="" className='navLink'>Pages</a>
                    </li>
                    {/* integrate it somewhere  */}
                    <button className='btn'><a href="">Book now</a></button>
                </ul>
                <div className="closeNavbar">
                <IoMdCloseCircle className="icon" />
                </div>
            </div>
            <div className="toggleNavbar">
            <BsThreeDotsVertical />

            </div>
        </header>
    </section>
  )
}

export default Navbar;
