import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null); // Tambahkan untuk menyimpan data pesanan

  // Fungsi untuk menambahkan item ke keranjang
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  // Fungsi untuk menghapus item dari keranjang
  const removeFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCart(
          cart.map((cartItem) =>
            cartItem.name === item.name
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
      } else {
        setCart(cart.filter((cartItem) => cartItem.name !== item.name));
      }
    }
  };

  // Fungsi untuk menyimpan data pesanan
  const saveOrder = (orderData) => {
    setOrder(orderData);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, order, saveOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
