import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Makanan from "./pages/Makanan";
import Minuman from "./pages/Minuman";
import Promo from "./pages/Promo";
import Paket from "./pages/Paket";
import Rekomendasi from "./pages/Rekomendasi";
import PaymentPage from "./pages/PaymentPage";
import Cart from "./components/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Tambahkan ke keranjang
  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Hapus dari keranjang
  const removeFromCart = (id) => {
    setCartItems((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== id)
    );
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Beranda addToCart={addToCart} />} />
          <Route path="/makanan" element={<Makanan addToCart={addToCart} />} />
          <Route path="/minuman" element={<Minuman addToCart={addToCart} />} />
          <Route path="/promo" element={<Promo addToCart={addToCart} />} />
          <Route path="/paket" element={<Paket addToCart={addToCart} />} />
          <Route
            path="/payment"
            element={
              <PaymentPage cartItems={cartItems} removeFromCart={removeFromCart} />
            }
          />
        </Routes>
        {/* Tambahkan Keranjang di Semua Halaman */}
        <Cart cartItems={cartItems} />
      </div>
    </Router>
  );
};

export default App;
