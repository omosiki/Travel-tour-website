import React from 'react'
import "./home.css"
const Home = () => {
  const handldeSubmit = (e) =>{
    e.preventDefault()
    const bookingDetal = {
      location: e.target().value,
      price: e.target().value,
      date: e.target().value
    }
    localStorage.setItem("bookingDetal", JSON.stringify(bookingDetal))
    alert("Congratulation")
  }

  return (
    <div>
      <section className="home">
      <div className="secContainer container">
      <div className="homeText">

        <h1>Plan Your Trip With Zikrah Travel.....</h1>

         <p className='subTitle'>
          Travel to your favourite city, Explore the world and see beautiful nature.
        </p> 
        <button className='btn'>Explore</button>
      </div>

    <form action="">
      <div className="homeCard grid">

        <div className="destination">
          <label htmlFor="destination"> Destination:</label>
            <input type="text" placeholder='location....' id='location' />
        </div>

        <div className="priceDiv">
          <label htmlFor="price">Amount:</label>
           <input type="text" placeholder='$140-$500' id='price' />
        </div>


        <div className="dateInput">
          <label htmlFor="date">Enter date</label>
          <input type="date" id='date'  />
        </div>

        <button onClick={handldeSubmit} className='btn'>
          Search
        </button>
      </div>
      </form>
      </div>
      </section>
    </div>
  )
}

export default Home
