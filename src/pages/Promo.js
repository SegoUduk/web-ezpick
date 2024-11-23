import React, { useState } from 'react';
import './Promo.css';
import MenuItem from '../components/MenuItem';
import Navbar from '../components/Navbar';
import "../components/Overlay.css";

const Promo = () => {
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
    <div className="Promo">
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
        <h1 className="hero-text">KLIK, PILIH, NIKMATI</h1>
      </div>

      <div className="breadcrumb">Home/Promo Spesial</div>

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

export default Promo;
