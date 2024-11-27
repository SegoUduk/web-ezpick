import React, { useState } from "react";
import "./CartPopup.css";
import PaymentMethod from "./PaymentMethod";

const CartPopup = ({ cart, onAdd, onRemove, onClose }) => {
  const [pickupOption, setPickupOption] = useState("Makan di Tempat"); // Default option
  const [numberOfPeople, setNumberOfPeople] = useState(1); // Default 1 person
  const [orderNote, setOrderNote] = useState(""); // Default empty note

  const handlePickupChange = (e) => {
    setPickupOption(e.target.value);
    if (e.target.value !== "Makan di Tempat") {
      setNumberOfPeople(1); // Reset jumlah orang jika bukan "Makan di Tempat"
    }
  };

  return (
    <div className="cart-popup-container">
      <div className="cart-popup">
        <div className="cart-header">
          <h2>Keranjang Belanja</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <div className="cart-item">
                <span>{item.name}</span>
                <span>
                  x{item.quantity} - Rp{(item.price * item.quantity).toLocaleString()}
                </span>
                <div className="cart-controls">
                  <button onClick={() => onAdd(item)}>+</button>
                  <button onClick={() => onRemove(item)}>-</button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Opsi Pengambilan */}
        <div className="pickup-options">
          <h3>Opsi Pengambilan</h3>
          <label>
            <input
              type="radio"
              value="Makan di Tempat"
              checked={pickupOption === "Makan di Tempat"}
              onChange={handlePickupChange}
            />
            Makan di Tempat
          </label>
          {pickupOption === "Makan di Tempat" && (
            <div className="number-of-people">
              <label>
                Jumlah Orang:
                <input
                  type="number"
                  min="1"
                  value={numberOfPeople}
                  onChange={(e) => setNumberOfPeople(e.target.value)}
                />
              </label>
            </div>
          )}
          <label>
            <input
              type="radio"
              value="Diambil"
              checked={pickupOption === "Diambil"}
              onChange={handlePickupChange}
            />
            Diambil
          </label>
        </div>

        {/* Catatan Pesanan */}
        <div className="order-note">
          <h3>Catatan untuk Pesanan</h3>
          <textarea
            placeholder="Masukkan catatan (contoh: tanpa sambal, ekstra saus, dll.)"
            value={orderNote}
            onChange={(e) => setOrderNote(e.target.value)}
          />
        </div>

        <PaymentMethod />
      </div>
    </div>
  );
};

export default CartPopup;
