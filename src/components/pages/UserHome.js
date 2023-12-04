import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./searchResultList.css";
import '../../App.css';

export const UserHome = () => {
    // Example array of products
    const products = [
        { id: 1, name: "Product 1", price: "$19.99" },
        { id: 2, name: "Product 2", price: "$29.99" },
        { id: 3, name: "Product 3", price: "$39.99" },
        // Add more product entries as needed
    ];

    return (
        <>
            <h1 className="d-flex justify-content-center bg-primary vh-20">My List</h1>
            <body>
                <div className="results-list">
                    {products.map(product => (
                        <div key={product.id} className="product-entry">
                            <h3>{product.name}</h3>
                            <p>Price: {product.price}</p>
                            <button className="btn btn-success w-100 rounded-0">Remove Item</button>
                        </div>
                    ))}
                    <div>
                    <Link to='/payment'>
                    <button to="/payment" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Add Payment Method</button>
                    </Link>  
                    </div>
                </div>
            </body>
        </>
    );
};

export default UserHome;