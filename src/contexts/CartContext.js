import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currItem) => {
      return accumulator + currItem.price * currItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);


  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currItem) => {
        return accumulator + currItem.amount;
      }, 0);
      setItemAmount(amount)
    }
  }, [cart]);


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

  const deleteFromCart = (id) => {

    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  }

  const emptyCart = () => {
    setCart([])
  }

  const AmountIncr = (id) => {
    const cartItem = cart.find(item => item.id === id);
    addToCart(cartItem, id);
  }
  const AmountDecr = (id) => {
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        }
        else {
          return item;
        }
      });
      setCart(newCart)
    }

    if (cartItem.amount < 2) {
      deleteFromCart(id);
    }

  }


  return <CartContext.Provider value={{
    cart,
    emptyCart,
    deleteFromCart,
    addToCart,
    AmountIncr,
    AmountDecr,
    itemAmount,
    total

  }}>{children}</CartContext.Provider>;

};


export default CartProvider;
