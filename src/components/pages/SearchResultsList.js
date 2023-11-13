import React from "react";
import "./searchResultList.css";
import '../../App.css';

export const SearchResultsList = () => {
    // Example array of products
    const products = [
        { id: 1, name: "Product 1", price: "$19.99" },
        { id: 2, name: "Product 2", price: "$29.99" },
        { id: 3, name: "Product 3", price: "$39.99" },
        // Add more product entries as needed
    ];

    return (
        <div className="results-list">
            <h1>Results</h1>
            {products.map(product => (
                <div key={product.id} className="product-entry">
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchResultsList;
