import React from 'react'
import Search from './Search';
import Header from './Header';
import Card from './Card';
const Landing = () => {
    const featuredPackages = [
        {
            title: 'Beach Getaway',
            description: 'Enjoy a relaxing time at the beach.',
            price: 299,
            image: 'https://via.placeholder.com/150'
        },
        {
            title: 'Mountain Adventure',
            description: 'Explore the great outdoors in the mountains.',
            price: 499,
            image: 'https://via.placeholder.com/150'
        },
        {        title: 'City Tour',
            description: 'Discover the vibrant culture of the city.',
            price: 199,
            image: 'https://via.placeholder.com/150'
        }
    ];

    const handleSearch = (destination) => {
        console.log('Searching for:', destination);
        // Implement search functionality here
    };
  return (
    <div>
    <Header />
    <div className="container">
        <Search onSearch={handleSearch} />
        <h2>Featured Packages</h2>
        <div className="d-flex flex-wrap justify-content-center">
            {featuredPackages.map((pkg, index) => (
                <Card key={index} packageData={pkg} />
            ))}
        </div>
    </div>
</div>
    
  )
}

export default Landing
