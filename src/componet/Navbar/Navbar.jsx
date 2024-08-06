import React, { useState } from 'react'
import "./navbar.css"
// import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import logo from "./../images/airplane.jpg"
import {Link} from "react-router-dom"



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


    <section className="home">
      <div className="secContainer container">
      <div className="homeText">

        <h1>Plan Your Trip With Zikrah Travel.....</h1>

         <p className='subTitle'>
          Travel to your favourite city with respectful of the environment 
        </p> 
        <button className='btn'>Explore</button>
      </div>


      <div className="homeCard grid">

        <div className="destination">
          <label htmlFor="destination"> Destination:</label>
            <input type="text" placeholder='location....' />
            {/* <LiaSearchLocationSolid /> */}
        </div>

        <div className="priceDiv">
          <label htmlFor="price">Amount:</label>
           <input type="text" placeholder='$140-$500' />
        </div>


        <div className="dateInput">
          <label htmlFor="date">Enter date</label>
          <input type="date"  />
        </div>

        <button className='btn'>
          Search
        </button>
      </div>
      </div>


      </section>
      


</>
  )
}

export default Navbar;
