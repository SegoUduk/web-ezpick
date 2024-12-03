import React, { useState } from "react";
import "./Promo.css";
import MenuItem from "../components/MenuItem";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import ProfileMenu from "../components/ProfileMenu";
import CartPopup from "../components/CartPopup";
import "../components/Overlay.css";

const Promo = () => {
  const { isLoggedIn, logout } = useAuth();
  const { cart, addToCart, removeFromCart } = useCart();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [search, setSearch] = useState("");

  // Data Promo
  const promoItems = [
    { id: 1, name: "Promo Chicken Wings", price: 30000, image: "/gambar/sayap.png" },
    { id: 2, name: "Promo Pasta Bolognese", price: 35000, image: "/gambar/pasta.jpg" },
    { id: 3, name: "Promo Pizza Special", price: 45000, image: "/gambar/pizza.jpg" },
    { id: 4, name: "Promo Minuman Paket", price: 25000, image: "/gambar/minuman.jpg" },
  ];

  const filteredPromo = promoItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Promo">
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
          alt="Promo Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">Promo Spesial untuk Kamu</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">Home / Promo Spesial</div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari promo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Menu Promo */}
      <div className="menu-section">
        <h2>Menu Promo Terbaik</h2>
        <div className="menu-grid">
          {filteredPromo.map((item) => (
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

export default Promo;
