import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }

    // check the item is already in cart 
    const cartItem = cart.find(item => item.id === id);

    // item is already in cart

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        }
        else {
          return item;
        }
      });
      setCart(newCart)
    }
    else {
      setCart([...cart, newItem])
    }
  }

  // console.log(cart);


  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
