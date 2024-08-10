import React, { useState } from 'react'
import "./navbar.css"
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import logo from "../../assets/images/airplane.jpg"




const Navbar = () => {

  const [active, setActive] = useState("navBar")
  // function to toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar")
  }
  // function remove toggle
  const removeNav = () => {
    setActive("navBar")
  }


  return (
    <>
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
              <div className='logo flex'>
              
             <img src={logo} alt="" />
             <h1 > Zikrah</h1>
              </div>
              
            </div>
            <div className={active}>
                <ul className="navLists flex">
                    <li className='navItem'>
                    <a href="" className='navLink'>Home</a>
                    </li>
                    <li className='navItem'>
                    <a href="" className='navLink'>Packages</a>
                    </li>
                    <li className='navItem'>
                    <a href="" className='navLink'>Main</a>
                    </li>
                    <li className='navItem'>
                    <a href="" className='navLink'>About</a>
                    </li>
                    <li className='navItem'>
                    <a href="" className='navLink'>Pages</a>
                    </li>
                    {/* integrate it somewhere  */}
                    {/* <button className='btn'><a href="">Book now</a></button> */}
                </ul>
                <div onClick={removeNav} className="closeNavbar">
                <IoMdCloseCircle className="icon" />
                </div>
            </div>
            <div onClick={showNav} className="toggleNavbar">
            <TbGridDots  className='icon'/>

            </div>
        </header>
    </section>





 
      
      </>
  )
}

export default Navbar;
