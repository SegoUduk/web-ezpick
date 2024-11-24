import React, { useState } from 'react';
import './Makanan.css';
import MenuItem from '../components/MenuItem';
import Navbar from '../components/Navbar';
import "../components/Overlay.css";
import Cart from '../components/Cart';

const Makanan = ({ addToCart }) => {
  const [search] = useState('');
  
  const menuItems = [
    { id: 1, name: 'Paket Chicken Katsu', price: 25000, image: 'chicken-katsu.jpg' },
    { id: 2, name: 'Paket Ayam Geprek', price: 22000, image: 'ayam-geprek.jpg' },
    { id: 3, name: 'Paket Nasi Goreng', price: 20000, image: 'nasi-goreng.jpg' },
    { id: 4, name: 'Paket Burger', price: 27000, image: 'burger.jpg' },
  ];

  const filteredMenu = menuItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Menu Makanan</h1>
      <div>
        {menuItems.map((food) => (
          <div key={food.id} style={{ marginBottom: "10px" }}>
            <p>{food.name}</p>
            <p>Harga: Rp {food.price.toLocaleString()}</p>
            <button onClick={() => addToCart(food)}>Tambah ke Keranjang</button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="Makanan">
      <Navbar
        isLoggedIn={false}
        handleLoginClick={() => {}}
        handleProfileClick={() => {}}
      />

      <div className="hero-section">
        <img
          src="https://via.placeholder.com/1500x400"
          alt="Food Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">Klik, Pilih, Nikmati</h1>
      </div>

      <div className="breadcrumb">Home/Makanan</div>

      <div className="menu-section">
        <div className="menu-grid">
          {filteredMenu.map(item => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Makanan;
