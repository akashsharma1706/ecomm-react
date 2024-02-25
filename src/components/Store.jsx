// Store.js
import React from 'react';

function Store() {
  const electronics = [
    { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/300x200?text=Laptop' },
    { id: 2, name: 'Smartphone', price: 599, image: 'https://via.placeholder.com/300x200?text=Smartphone' },
    { id: 3, name: 'Tablet', price: 399, image: 'https://via.placeholder.com/300x200?text=Tablet' },
    { id: 4, name: 'Headphones', price: 149, image: 'https://via.placeholder.com/300x200?text=Headphones' },
    { id: 5, name: 'Smartwatch', price: 199, image: 'https://via.placeholder.com/300x200?text=Smartwatch' },
    { id: 6, name: 'Camera', price: 799, image: 'https://via.placeholder.com/300x200?text=Camera' }
  ];

  return (
    <div className="container">
      <h2>Featured Electronics</h2>
      <div className="row">
        {electronics.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
