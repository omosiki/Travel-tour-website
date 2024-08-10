import React from 'react'
import Navbar from "./component/Navbar/Navbar"
import Home from "./component/Home/Home"
import Popular from "./component/Popular/Popular"
import Offer from "./component/Offer/Offer"
import Footer from "./component/Footer/Footer"
const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Popular/>
      <Offer/>
      <Footer/>
    </>
  )
}

export default App;
