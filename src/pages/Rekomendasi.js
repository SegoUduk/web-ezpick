import React, { useState } from "react";
import "./Rekomendasi.css";
import MenuItem from "../components/MenuItem";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import ProfileMenu from "../components/ProfileMenu";
import CartPopup from "../components/CartPopup";
import "../components/Overlay.css";

const Rekomendasi = () => {
  const { isLoggedIn, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [cart, setCart] = useState([]); // State untuk keranjang
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [search] = useState("");

  // Menu Rekomendasi (Best Seller, Harga Terjangkau)
  const bestSellerItems = [
    { id: 1, name: "Paket Chicken Katsu", price: 25000, image: "chicken-katsu.jpg" },
    { id: 2, name: "Paket Ayam Geprek", price: 22000, image: "ayam-geprek.jpg" },
    { id: 3, name: "Promo Pizza Special", price: 45000, image: "pizza-special.jpg" },
    { id: 4, name: "Promo Minuman Paket", price: 25000, image: "minuman-paket.jpg" },
  ];

  const affordableItems = [
    { id: 3, name: "Paket Nasi Goreng", price: 20000, image: "nasi-goreng.jpg" },
    { id: 4, name: "Paket Burger", price: 27000, image: "burger.jpg" },
    { id: 5, name: "Promo Pizza Special", price: 45000, image: "pizza-special.jpg" },
    { id: 6, name: "Promo Minuman Paket", price: 25000, image: "minuman-paket.jpg" },
  ];

  const filteredBestSeller = bestSellerItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredAffordable = affordableItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Fungsi untuk menambah item ke keranjang
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
    setShowCartPopup(true); // Tampilkan popup keranjang
  };

  // Fungsi untuk mengurangi item dari keranjang
  const removeFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem && existingItem.quantity > 1) {
      setCart(
        cart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      setCart(cart.filter((cartItem) => cartItem.name !== item.name)); // Hapus item jika quantity sudah 1
    }
  };

  return (
    <div className="rekomendasi">
      {showProfileMenu && <div className="overlay" onClick={() => setShowProfileMenu(false)}></div>}
      <Navbar
        isLoggedIn={isLoggedIn}
        handleLoginClick={() => {}}
        handleProfileClick={() => setShowProfileMenu(!showProfileMenu)}
      />

      <div className="hero-section">
        <img
          src="https://via.placeholder.com/1500x400"
          alt="Food Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">Rekomendasi Makanan</h1>
      </div>

      <div className="breadcrumb">Home/Rekomendasi</div>

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
              onAddToCart={() => addToCart(item)} // Add item to cart
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
              onAddToCart={() => addToCart(item)} // Add item to cart
            />
          ))}
        </div>
      </div>

      {/* CartPopup */}
      {showCartPopup && (
        <CartPopup
          cart={cart}
          onClose={() => setShowCartPopup(false)} // Close cart popup
          onAdd={addToCart}  // Pass addToCart for increasing quantity
          onRemove={removeFromCart} // Pass removeFromCart for decreasing quantity
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
