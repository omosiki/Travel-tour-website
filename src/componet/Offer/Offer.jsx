import React from 'react'
import "./offer.css"
import { IoBed } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import offer2 from "../../assets/images/offer2.jpeg"
import offer4 from "../../assets/images/offer4.jpg"
import offer5 from "../../assets/images/offer5.jpg"
import offer6 from "../../assets/images/offer6.jpg"



// import { FaLocationDot } from "react-icons/fa6";


//using the same higer order array methdes to (Map) and list our offer

const Offers = [
    {
        id: offer2,
        imgSrc: offer2,
        destTitle: "Nigeria",
        location: "Abuja", 
        price: "$7,56"
    },
    {
        id:offer4,
        imgSrc: offer4,
        destTitle: "Nigeria",
        location: "Lagos", 
        price: "$9,56"
    },
    {
        id:offer5,
        imgSrc: offer5,
        destTitle: "USA",
        location: "New york", 
        price: "$2,56"
    },
    {
        id:offer6,
        imgSrc: offer6,
        destTitle: "Dubia",
        location: "Arab Emirate", 
        price: "$7,56"
    },
   
    
]
const Offer = () => {
  return (
    <>
      <section className='offer container section'>
        <div className="secIntro">
            <h2>Special Offer</h2>
            <p>We create an unforgetable memories, Explore the rest of the world!!!</p>
        </div>
        <div className="mainContent grid">
           
        {
            Offers.map(({id, imgSrc, destTitle, location, price}) =>{
                return(
                    <div className="singleOffer">
                    <div className="destImage">

                        <img src={imgSrc} alt={destTitle}/>
    
                        <span className="discount">
                            30% Off
                        </span>
                    </div>
                <div className="offerBody">
                    <div className="price flex">
                     <h4>{price}</h4>
                    <span className="status">
                     For Rent
                    </span>
                </div>

            <div className="amenities flex">
                <div className="singleAmenty flex">
                <IoBed  className="icon"/>
                <small>2 Beds</small>
            </div>


            <div className="singleAmenty flex">
                <FaBath className="icon" />
                <small>1 Bath</small>
            </div>


            <div className="singleAmenty flex">
                <FaWifi className='icon' />
                <small> Wifi</small>
            </div>

            <div className="singleAmenty flex">
                <FaBath className="icon" />
             <small>1 Bath</small>
             </div>
            </div>

             <div className="location flex">
                <FaLocationDot className='icon'/>
                <small>{location}</small>
             </div>
            <button className='btn flex'>View detail <BsArrowRight className='icon'/></button>
        </div>
                   
        </div>
                )
            })
        }
        </div>
      </section>
    </>
  )
}

export default Offer
