import React, { useState, useEffect } from 'react';
import './searchResultList.css';
import DiamondRingsData from './DiamondRings.json'; // Import the JSON file directly

const SearchResultsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Set products using the imported JSON data
    setProducts(DiamondRingsData);
  }, []);

  return (
    <div className="results-list">
      {products.map((product, index) => (
        <div key={index} className="product-entry">
          <img src={product.thumbnailImage} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{`Stars: ${product.stars} (${product.reviewsCount} reviews)`}</p>
          <p>{`Brand: ${product.brand}`}</p>
          <p>{`Category: ${product.breadCrumbs}`}</p>
          <a href={product.url} target="_blank" rel="noopener noreferrer">
            View on Amazon
          </a>
        </div>
      ))}
    </div>
  );
};

export default SearchResultsList;
