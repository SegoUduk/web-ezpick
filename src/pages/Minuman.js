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
  const { cart, addToCart, removeFromCart } = useCart(); // State untuk keranjang
  const [showCartPopup, setShowCartPopup] = useState(false); // State untuk popup keranjang
  const [search] = useState("");

  const menuItems = [
    { id: 1, name: "Es Teh Manis", price: 8000, image: "es-teh-manis.jpg" },
    { id: 2, name: "Kopi Susu", price: 15000, image: "kopi-susu.jpg" },
    { id: 3, name: "Jus Alpukat", price: 20000, image: "jus-alpukat.jpg" },
    { id: 4, name: "Soda Gembira", price: 18000, image: "soda-gembira.jpg" },
  ];

  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Minuman">
      {showProfileMenu && <div className="overlay" onClick={() => setShowProfileMenu(false)}></div>}
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLoginClick={() => alert("Silakan login")}
        handleProfileClick={() => setShowProfileMenu(!showProfileMenu)}
      />

      <div className="hero-section">
        <img
          src="https://via.placeholder.com/1500x400"
          alt="Drink Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">Klik, Pilih, Nikmati</h1>
      </div>

      <div className="breadcrumb">Home/Minuman</div>

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

export default Minuman;
