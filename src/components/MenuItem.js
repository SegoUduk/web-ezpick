import React from 'react';
import './MenuItem.css';

const MenuItem = ({ name, price, image, onAddToCart }) => {
  return (
    <div className="menu-item">
      <img src={'https://via.placeholder.com/1500x400'} alt={name} className="menu-image" />
      <p className="menu-name">{name}</p>
      <p className="menu-price">Rp. {price.toLocaleString()}</p>
      <button className="add-to-cart-btn" onClick={() => onAddToCart({ name, price, image })}>
        Tambah ke Keranjang
      </button>
    </div>
  );
};

export default MenuItem;
