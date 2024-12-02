import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./MenuPopup.css"; // Your styles for the popup

const MenuPopup = ({ onClose }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleFoodClick = () => {
    navigate("/Makanan"); // Navigate to /Makanan when Food is clicked
  };

  const handleDrinkClick = () => {
    navigate("/Minuman"); // You can add navigation for Drink if needed
  };

  return (
    <div className="menu-popup-overlay">
      <div className="menu-popup">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Pilih Menu</h2>
        <div className="menu-options">
          <div className="menu-option" onClick={handleFoodClick}>
            <img src="https://via.placeholder.com/100" alt="Food" />
            <p>Makanan</p>
          </div>
          <div className="menu-option" onClick={handleDrinkClick}>
            <img src="https://via.placeholder.com/100" alt="Drink" />
            <p>Minuman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPopup;
