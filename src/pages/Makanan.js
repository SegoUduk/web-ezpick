import React, { useState } from "react";
import "./Makanan.css";
import MenuItem from "../components/MenuItem";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import ProfileMenu from "../components/ProfileMenu";
import CartPopup from "../components/CartPopup";
import "../components/Overlay.css";

const Makanan = () => {
  const { isLoggedIn, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { cart, addToCart, removeFromCart } = useCart(); // State untuk keranjang
  const [showCartPopup, setShowCartPopup] = useState(false); // State untuk popup keranjang
  const [search] = useState("");

  const menuItems = [
    { id: 1, name: "Paket Chicken Katsu", price: 25000, image: "/gambar/katsu.jpeg" },
    { id: 2, name: "Paket Ayam Geprek", price: 22000, image: "ayam-geprek.jpg" },
    { id: 3, name: "Paket Nasi Goreng", price: 20000, image: "nasi-goreng.jpg" },
    { id: 4, name: "Paket Burger", price: 27000, image: "burger.jpg" },
  ];

  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Makanan">
      {showProfileMenu && <div className="overlay" onClick={() => setShowProfileMenu(false)}></div>}
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLoginClick={() => alert("Silakan login")}
        handleProfileClick={() => setShowProfileMenu(!showProfileMenu)}
      />

      <div className="hero-section">
        <img
          src="baner.jpg"
          alt="Food Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">Klik, Pilih, Nikmati</h1>
      </div>

      <div className="breadcrumb">Home/Makanan</div>

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
                setShowCartPopup(true); // Tampilkan popup keranjang
              }}
            />
          ))}
        </div>
      </div>

      {/* CartPopup */}
      {showCartPopup && (
        <CartPopup
          cart={cart}
          onAdd={(item) => addToCart(item)} // Fungsi untuk menambah item
          onRemove={(item) => removeFromCart(item)} // Fungsi untuk mengurangi item
          onClose={() => setShowCartPopup(false)} // Fungsi untuk menutup popup
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

export default Makanan;
