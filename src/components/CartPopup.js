import React, { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import "./CartPopup.css";

const CartPopup = ({ cart, onClose }) => {
  const [pickupOption, setPickupOption] = useState(null);
  const [note, setNote] = useState("");

  return (
    <div className="cart-popup">
      <h2>Keranjang Belanja</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} {item.quantity > 1 && `x${item.quantity}`} - Rp{(item.price * item.quantity).toLocaleString()}
          </li>
        ))}
      </ul>

      {/* Pilihan Pengambilan */}
      <div className="pickup-options">
        <h3>Opsi Pengambilan</h3>
        <div>
          <button onClick={() => setPickupOption("Diambil")}>Diambil</button>
          <button onClick={() => setPickupOption("Makan Ditempat")}>Makan Ditempat</button>
        </div>
        {pickupOption === "Makan Ditempat" && (
          <div className="sub-options">
            <label>
              <input type="radio" name="people" value="1" />
              1 Orang
            </label>
            <label>
              <input type="radio" name="people" value="2-4" />
              2-4 Orang
            </label>
            <label>
              <input type="radio" name="people" value="4++" />
              4 Orang Keatas
            </label>
          </div>
        )}
      </div>

      {/* Catatan */}
      <div className="note">
        <label>Catatan:</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Tulis catatan Anda"
        ></textarea>
      </div>

      <button onClick={onClose}>Tutup</button>
      <button>Beli</button>

      {/* Menu Pembayaran */}
      <PaymentMethod />
    </div>
  );
};

export default CartPopup;
