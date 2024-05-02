import React from 'react';
import './Shops.css'; // Import CSS file for component styles
import fashionImage from '../assests/fashion.jpg';
import gadgetImage from '../assests/gadget.jpg';
import bookImage from '../assests/book.jpg';

const Shops = () => {
  const dummyShops = [
    {
      id: 1,
      name: 'Fashion Hub',
      description: 'Trendy clothing for all occasions',
      location: '123 Fashion St, City',
      color: '#f6caca', // Light red
      image: fashionImage
    },
    {
      id: 2,
      name: 'Gadget Zone',
      description: 'Explore the latest tech gadgets',
      location: '456 Tech Ave, Town',
      color: '#c6e0b4', // Light green
      image: gadgetImage
    },
    {
      id: 3,
      name: 'Bookworm Corner',
      description: 'Books for every reader',
      location: '789 Library Rd, Village',
      color: '#c9d5f5', // Light blue
      image: bookImage
    }
  ];

  return (
    <div className="shops-container">
      <h1 className="page-title">Shops Page</h1>
      <p className="shops-intro">Explore our featured shops:</p>
      <ul className="shops-list">
        {dummyShops.map((shop) => (
          <li key={shop.id} className="shop-item" style={{ backgroundColor: shop.color }}>
            <div className="shop-image">
              <img src={shop.image} alt={shop.name} />
            </div>
            <div className="shop-details">
              <h3>{shop.name}</h3>
              <p>{shop.description}</p>
              <p className="location">Location: {shop.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shops;
