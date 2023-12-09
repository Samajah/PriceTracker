import { createContext, useState } from "react";


export const CartContext = createContext({
    items: [],
    getProduct: () => {},
    addeToCart: () => {},
    removeFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);


    function productQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = productQuantity(id);

        if (quantity === 0) { 
            cartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else { 
            cartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                               
                    ? { ...product, quantity: product.quantity + 1 } 
                    : product                                        
                )
            )
        }
    }

    function removeFromCart(id) {
        const quantity = productQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                              
                    ? { ...product, quantity: product.quantity - 1 } 
                    : product                                        
                )
            )
        }
    }

    function totalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = productData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    return (
        <Cart.Provider value={contextValue}>
            {children}
        </Cart.Provider>
    )
}
