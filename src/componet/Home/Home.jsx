import React from 'react'
import "./home.css"
import background from "./../images/Travel-backgroung.jpeg"
const Home = () => {
  
   return (
    <section className="home">
        <div className="overlay"></div>
      <img src={background} typeof='img' alt="background" />


      <div className="homeContent container">
      <div className="textDiv">

        <span className="smallText">
        Our Packeges
        </span>

        <h1 className="homeTitle">
          Search your holiday
        </h1>

      </div>
      <div className="card grid">
        <div className="destination">
          <label htmlFor="city">Search your destination:</label>
          <div className="input flex">
            <input type="text" placeholder='Enter name here' />
          </div>
        </div>

        <div className="distDiv">
          <label htmlFor="location">Location</label>
          <div className="input flex" placeholder="11/meters">
            <input type="text"  />
          </div>
        </div>
        <div className="price">
          <label htmlFor="price">Search your destination:</label>
          <div className="input flex">
            <input type="text" placeholder='$140/-$500' />
          </div>
        </div>
      </div>
      </div>


      </section>
      
  )
  
}

export default Home;
