import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "./Paket.css";
import MenuItem from "../components/MenuItem";
import Navbar from "../components/Navbar";
import ProfileMenu from "../components/ProfileMenu";
import CartPopup from "../components/CartPopup";
import "../components/Overlay.css";

const Paket = () => {
  const { isLoggedIn, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [search, setSearch] = useState("");

  const menuItems = [
    { id: 1, name: "Paket Chicken Katsu", price: 25000, image: "/gambar/katsu.jpeg" },
    { id: 2, name: "Paket Ayam Geprek", price: 22000, image: "/gambar/geprek.jpg" },
    { id: 3, name: "Paket Nasi Goreng", price: 20000, image: "/gambar/nasgor.jpg" },
    { id: 4, name: "Paket Burger", price: 27000, image: "/gambar/burger.png" },
  ];

  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Paket">
      {showProfileMenu && <div className="overlay" onClick={() => setShowProfileMenu(false)}></div>}
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLoginClick={() => alert("Silakan login")}
        handleProfileClick={() => setShowProfileMenu(!showProfileMenu)}
      />

      {/* Hero Section */}
      <div className="hero-section">
        <img src="/gambar/baner.jpg" alt="Food Banner" className="hero-banner" />
        <h1 className="hero-text">Klik, Pilih, Nikmati</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">Home / Menu Paket</div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari paket..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Menu Grid */}
      <div className="menu-section">
        <h2>Pilihan Paket Terbaik</h2>
        <div className="menu-grid">
          {filteredMenu.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              onAddToCart={() => {
                addToCart(item);
                setShowCartPopup(true);
              }}
            />
          ))}
        </div>
      </div>

      {/* Cart Popup */}
      {showCartPopup && (
        <CartPopup
          cart={cart}
          onAdd={(item) => addToCart(item)}
          onRemove={(item) => removeFromCart(item)}
          onClose={() => setShowCartPopup(false)}
        />
      )}

      {/* Profile Menu */}
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
