import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./CartPopup.css";
import PaymentMethod from "./PaymentMethod";

const CartPopup = ({ cart, onAdd, onRemove, onClose }) => {
  const [pickupOption, setPickupOption] = useState("Makan di Tempat");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [orderNote, setOrderNote] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const navigate = useNavigate(); // Untuk navigasi ke halaman lain

  const handlePickupChange = (e) => {
    setPickupOption(e.target.value);
    if (e.target.value !== "Makan di Tempat") {
      setNumberOfPeople(1); // Reset jumlah orang jika bukan "Makan di Tempat"
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePurchase = () => {
    if (!selectedPaymentMethod) {
      alert("Silakan pilih metode pembayaran terlebih dahulu.");
      return;
    }

    const orderData = {
      cart,
      pickupOption,
      numberOfPeople: pickupOption === "Makan di Tempat" ? numberOfPeople : null,
      orderNote,
      paymentMethod: selectedPaymentMethod,
      total: calculateTotal(),
      time: new Date().toLocaleString(), // Waktu pembelian
    };

    // Navigasi ke halaman OrderSummary dengan data order
    navigate("/OrderSummary", { state: orderData });
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
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div>
                <span>{item.name}</span>
                <span>
                  x{item.quantity} - Rp{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
              <div className="cart-controls">
                <button onClick={() => onAdd(item)}>+</button>
                <button onClick={() => onRemove(item)}>-</button>
              </div>
            </li>
          ))}
        </ul>

        {/* Total Harga */}
        <div className="total-price">
          <h3>Total: Rp{calculateTotal().toLocaleString()}</h3>
        </div>

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

        {/* Metode Pembayaran */}
        <PaymentMethod onSelectPayment={(method) => setSelectedPaymentMethod(method)} />

        {/* Tombol Beli */}
        <div className="purchase-button-container">
          <button className="purchase-button" onClick={handlePurchase}>
            Beli
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
