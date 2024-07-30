import React from 'react'

const Card = ({packageData}) => {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
    <img src={packageData.image} className="card-img-top" alt={packageData.title} />
    <div className="card-body">
        <h5 className="card-title">{packageData.title}</h5>
        <p className="card-text">{packageData.description}</p>
        <p className="card-text"><strong>Price: ${packageData.price}</strong></p>
        <a href="#" className="btn btn-primary">View Details</a>
    </div>
</div>
  )
}

export default Card
