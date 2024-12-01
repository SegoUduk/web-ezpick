import React, { useState } from "react";
import "./Promo.css";
import MenuItem from "../components/MenuItem";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext"; // Import hook useCart
import Navbar from "../components/Navbar";
import ProfileMenu from "../components/ProfileMenu";
import CartPopup from "../components/CartPopup"; // Impor CartPopup
import "../components/Overlay.css";

const Promo = () => {
  const { isLoggedIn, logout } = useAuth();
  const { cart, addToCart, removeFromCart } = useCart(); // Akses cart dari context
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false); // State untuk popup keranjang
  const [search] = useState("");

  // Menu khusus Promo
  const menuItems = [
    { id: 1, name: "Promo Chicken Wings", price: 30000, image: "chicken-wings.jpg" },
    { id: 2, name: "Promo Pasta Bolognese", price: 35000, image: "pasta-bolognese.jpg" },
    { id: 3, name: "Promo Pizza Special", price: 45000, image: "pizza-special.jpg" },
    { id: 4, name: "Promo Minuman Paket", price: 25000, image: "minuman-paket.jpg" },
  ];

  const filteredMenu = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="Promo">
      {showProfileMenu && <div className="overlay" onClick={() => setShowProfileMenu(false)}></div>}
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLoginClick={() => alert("Silakan login")}
        handleProfileClick={() => setShowProfileMenu(!showProfileMenu)}
      />

      <div className="hero-section">
        <img
          src="baner.jpg"
          alt="Promo Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">PROMO SPESIAL UNTUKMU</h1>
      </div>

      <div className="breadcrumb">Home/Promo Spesial</div>

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

      {/* Tampilkan ProfileMenu jika state-nya true */}
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
