import React from 'react'
import logo from "./../component/imgaes/logo-M.webp"
import styled from 'styled-components'


const Header = () => {

  return ( 
    <>
      <section className='body'>
      <Headers>
           <div className="logo">
            <img src={logo} alt="Logo" />
           </div>
           <nav>
            <a href="Home">Home</a>
            <a href="Home">Home</a>
            <a href="Home">Home</a>
            <a href="Home">Home</a>
            <a href="Home">Home</a>
           </nav>
           <div className='button-contain'>
           <Buttons>signIn</Buttons>
          </div>
          
      </Headers>
      <div className="display">
        <h2>Travel and explore the world to your taste</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, fugiat?
        </p>
      </div>
      </section>
      
   </>
  )
}
const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  height: 80px;
 
  align-items: center;

  .logo{
    padding: 10px;
  }
  img{
    width: 90px;
    border: none;
    border-radius: 40px;
  }
  a{
    color:#fff;
       padding: 10px;
       font-weight:bold;
       font-size:20px;
       text-decoration:none;
  }

`

export const Buttons = styled.button`
padding: 10px;
border: none;
border-radius: 5px;
color: white;
background: #8fbed5;
`

export default Header
