import React, { useState } from 'react'
import  Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import pix from "../../assets/images/popular1.jpeg"
import pixT from "../../assets/images/popular3.webp"
import popular from "../../assets/images/popular4.jpeg"
import popular2 from "../../assets/images/popular6.jpeg"
import "./popular.css"

//Using a high order method array to display all the destinatiopn using map.
const  Data = [
{
    id:1,
    imgSrc: pix,
    destTitle: "Machu Picchu",
    location: "peru", 
    grade: "CULTURAL RELAX"
},
{
    id:2,
    imgSrc: pixT,
    destTitle: "Nigeria",
    location: "lagos", 
    grade: "CULTURAL RELAX"
},
{
    id:3,
    imgSrc: popular,
    destTitle: "South African",
    location: "Zooli", 
    grade: "CULTURAL RELAX"
},
{
    id:4,
    imgSrc: popular2,
    destTitle: "Dubia",
    location: "Arab Emirate", 
    grade: "CULTURAL RELAX"
}


]
const Popular = () => {

  

   <section className='popularDestination'>
    <div className="popular">
       <h2>
       Popular Destination
       </h2>
       <p> From historical cites to natural spectecular,Come see and explore the rest of the world. </p>
    </div>

        {
            Data.map(({id, imgSrc, destTitle,location,grade}) => {
                return(
                    <Carousel interval={3000}> {/* 3000 ms = 3 seconds */}
     
                    <Carousel.Item>
                       <img
                         className="d-block w-80"
                         src={imgSrc}
                         alt="First slide"
                       />
                       <Carousel.Caption>
                         <h3>{destTitle}</h3>
                         <p>
                            {location}
                         </p>
                       </Carousel.Caption>
                     </Carousel.Item>
                    
                     <Carousel.Item>
                       <img
                         className="d-block w-80"
                         src={imgSrc}
                         alt="Second slide"
                       />
                       <Carousel.Caption>
                         <h3>{destTitle}</h3>
                         <p>{location}</p>
                       </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                       <img
                         className="d-block w-80"
                         src={imgSrc}
                         alt="Third slide"
                       />
                       <Carousel.Caption>
                         <h3>{destTitle}</h3>
                         <p>{location}</p>
                       </Carousel.Caption>
                     </Carousel.Item>
               
                     <Carousel.Item>
                       <img
                         className="d-block w-100"
                         src={imgSrc}
                         alt="First slide"
                       />
                       <Carousel.Caption>
                         <h3>{destTitle}</h3>
                         <p>{location}</p>
                       </Carousel.Caption>
                     </Carousel.Item>
                    
                   </Carousel>
                )
            })
        }
</section>
}
export default Popular;
