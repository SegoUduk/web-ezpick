import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Paket.css";
import MenuItem from "../components/MenuItem";
import Navbar from "../components/Navbar";
import ProfileMenu from "../components/ProfileMenu";
import CartPopup from "../components/CartPopup";
import "../components/Overlay.css";

const Paket = () => {
  const { isLoggedIn, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [cart, setCart] = useState([]); // State untuk keranjang
  const [showCartPopup, setShowCartPopup] = useState(false); // State untuk popup keranjang
  const [search] = useState("");

  const menuItems = [
    { id: 1, name: "Paket Chicken Katsu", price: 25000, image: "chicken-katsu.jpg" },
    { id: 2, name: "Paket Ayam Geprek", price: 22000, image: "ayam-geprek.jpg" },
    { id: 3, name: "Paket Nasi Goreng", price: 20000, image: "nasi-goreng.jpg" },
    { id: 4, name: "Paket Burger", price: 27000, image: "burger.jpg" },
  ];

  const filteredMenu = menuItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
    setShowCartPopup(true);
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCart(cart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ));
      } else {
        setCart(cart.filter(cartItem => cartItem.name !== item.name));
      }
    }
  };

  return (
    <div className="Paket">
      {showProfileMenu && <div className="overlay" onClick={() => setShowProfileMenu(false)}></div>}
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLoginClick={() => alert("Silakan login")}
        handleProfileClick={() => setShowProfileMenu(!showProfileMenu)}
      />

      <div className="hero-section">
        <img
          src="https://via.placeholder.com/1500x400"
          alt="Food Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">Klik, Pilih, Nikmati</h1>
      </div>

      <div className="breadcrumb">Home/Menu Paket</div>

      <div className="menu-section">
        <div className="menu-grid">
          {filteredMenu.map(item => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onAddToCart={() => addToCart(item)}
            />
          ))}
        </div>
      </div>

      {showCartPopup && (
        <CartPopup 
          cart={cart} 
          onAdd={(item) => addToCart(item)} 
          onRemove={(item) => removeFromCart(item)} 
          onClose={() => setShowCartPopup(false)} 
        />
      )}

      {showProfileMenu && isLoggedIn && (
        <ProfileMenu
          onLogout={logout}
          onClose={() => setShowProfileMenu(false)}
        />
      )}
    </div>
  );
};

export default Paket;
