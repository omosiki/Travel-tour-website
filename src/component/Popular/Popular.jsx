import React, { useState } from 'react'
import  Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import offer1 from "../../assets/images/offer1.jpeg"
import popular3 from "../../assets/images/popular3.webp"
import popular4 from "../../assets/images/popular4.jpeg"
import offer3 from "../../assets/images/offer3.jpeg"
import "./popular.css"

//Using a high order method array to display all the destinatiopn using map.
const  Data = [
{
    id:offer1,
    imgSrc: offer1,
    destTitle: "Nigeria",
    location: "Abuja", 
    grade: "Beautiful city of Abuja"
},
{
    id:popular3,
    imgSrc: popular3,
    destTitle: "Nigeria",
    location: "lagos", 
    grade: "Discover the city's hidden gems."
},
{
    id:popular4,
    imgSrc: popular4,
    destTitle: "South African",
    location: "Zooli", 
    grade: "Explore the great outdoors."
},
{
    id:offer3,
    imgSrc: offer3,
    destTitle: "Dubia",
    location: "Arab Emirate", 
    grade: "Enjoy a relaxing time at the beach"
}


]
const Popular = () => {

  return (
   <>
   <section className='popularDestination'>
    <div className="popular">
       <h2>
       Popular Destination
       </h2>
       <p> From historical cites to natural spectecular,Come see and explore the rest of the world. </p>
    </div>
    
        {
            Data.map(({id, imgSrc, destTitle, location,grade}) => {
                return(
                    
                    <>
                    <div className='displayPopular'>
                     <Carousel interval={3000}> {/* 3000 ms = 3 seconds */}
                    <Carousel.Item key={id}>
                       <img
                         className="d-block w-80"
                         src={imgSrc}
                         alt=""
                       />
                       <Carousel.Caption>
                         <h3>{destTitle}</h3>
                         <p>{location}</p>
                         <small>{grade}</small>
                       </Carousel.Caption>
                     </Carousel.Item>
                    
                     
                      
                    
                     </Carousel>
                     </div>
                  </>
                )
            })
        }
  
   
</section>
    </>
  )
}



export default Popular
