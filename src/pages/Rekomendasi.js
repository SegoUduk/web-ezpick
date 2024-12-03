import React, { useState } from "react";
import "./Rekomendasi.css";
import MenuItem from "../components/MenuItem";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import ProfileMenu from "../components/ProfileMenu";
import CartPopup from "../components/CartPopup";
import "../components/Overlay.css";

const Rekomendasi = () => {
  const { isLoggedIn, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart();
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [search, setSearch] = useState("");

  // Data rekomendasi (Best Seller & Harga Terjangkau)
  const bestSellerItems = [
    { id: 1, name: "Paket Chicken Katsu", price: 25000, image: "/gambar/katsu.jpeg" },
    { id: 2, name: "Paket Ayam Geprek", price: 22000, image: "/gambar/geprek.jpg" },
    { id: 3, name: "Promo Pizza Special", price: 45000, image: "/gambar/pizza.jpg" },
    { id: 4, name: "Promo Minuman", price: 25000, image: "/gambar/minuman.jpg" },
  ];

  const affordableItems = [
    { id: 5, name: "Paket Nasi Goreng", price: 20000, image: "/gambar/nasgor.jpg" },
    { id: 6, name: "Paket Burger", price: 27000, image: "/gambar/burger.png" },
    { id: 7, name: "Promo Pizza Special", price: 45000, image: "/gambar/pizza.jpg" },
    { id: 8, name: "Promo Minuman", price: 25000, image: "/gambar/minuman.jpg" },
  ];

  const filteredBestSeller = bestSellerItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredAffordable = affordableItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Rekomendasi">
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
          alt="Food Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">Rekomendasi Pilihan</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">Home / Rekomendasi</div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Cari rekomendasi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Best Seller Section */}
      <div className="menu-section">
        <h2>Best Seller</h2>
        <div className="menu-grid">
          {filteredBestSeller.map((item) => (
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

      {/* Affordable Section */}
      <div className="menu-section">
        <h2>Harga Terjangkau</h2>
        <div className="menu-grid">
          {filteredAffordable.map((item) => (
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

export default Rekomendasi;
