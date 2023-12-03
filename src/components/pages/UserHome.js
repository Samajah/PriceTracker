import React, { useState } from "react";
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

    // const refreshEvent = document.createEvent('Event');
    // refreshEvent.initEvent('refresh', true, true);

    // async function removeItem(name) {
    //     if (items[name] == 1) {
    //       // Only one item left, just delete the item from the cart.
    //       delete items[name];
    //     } else {
    //       // More than one item left, decrement the count.
    //       items[name] -= 1;
    //     }
    //   }

    // async function removeItem(el) {
    //     const name = el.parentElement.querySelector('.item-name').innerText;
    //     await queries.removeItem(name);
    //     document.dispatchEvent(refreshEvent);
    // }

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
                </div>
            </body>
        </>
    );
};

export default UserHome;