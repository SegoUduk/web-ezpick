import React, { useState } from "react";
import "./Minuman.css";
import MenuItem from "../components/MenuItem";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import ProfileMenu from "../components/ProfileMenu";
import CartPopup from "../components/CartPopup";
import "../components/Overlay.css";

const Minuman = () => {
  const { isLoggedIn, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [search, setSearch] = useState("");

  // Data menu minuman
  const menuItems = [
    { id: 1, name: "Es Teh Manis", price: 8000, image: "/gambar/esteh.jpg" },
    { id: 2, name: "Kopi Susu", price: 15000, image: "/gambar/kopisusu.jpeg" },
    { id: 3, name: "Jus Alpukat", price: 20000, image: "/gambar/alpukat.jpg" },
    { id: 4, name: "Soda Gembira", price: 18000, image: "/gambar/soda.jpg" },
  ];

  // Filter menu berdasarkan pencarian
  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Minuman">
      {/* Overlay untuk ProfileMenu */}
      {showProfileMenu && <div className="overlay" onClick={() => setShowProfileMenu(false)}></div>}
      
      {/* Navbar */}
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLoginClick={() => alert("Silakan login")}
        handleProfileClick={() => setShowProfileMenu(!showProfileMenu)}
      />

      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="/gambar/baner.jpg"
          alt="Drink Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">Minuman Favorit Anda</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">Home / Minuman</div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari minuman..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Menu Section */}
      <div className="menu-section">
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

      {/* CartPopup */}
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

export default Minuman;
