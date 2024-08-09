import React from 'react'
import "./footer.css"
import logo from "../../assets/images/airplane.jpg"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="secContainer container grid">
            <div className="logoDiv">
                <div className="footer flex">
                    <img src={logo} alt="" />
                    <h1>Zikrah</h1>
                </div>
            </div>

            <div className="socials flex">
            <FaFacebook  className='icon'/>
            <FaTwitter className='icon'/>
            <FaInstagramSquare className='icon' />
            </div>
        </div>

        

        <div className="footerLinks">
          <span className="footerTitle">
          Contact us:
          </span>

          <span className='phone'>+234 054 562 552 </span>
          <span className='email'>zikrah666@gmail.com </span>
         
        </div>
      </div>
    </>
  )
}

export default Footer
