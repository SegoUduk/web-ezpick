import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = () => {
  const location = useLocation(); // Dapatkan data yang dikirim dari CartPopup
  const navigate = useNavigate();

  const orderData = location.state; // Data pesanan

  if (!orderData) {
    return <p>Tidak ada data pesanan.</p>;
  }

  return (
    <div className="order-summary-container">
      <h2>Ringkasan Pesanan</h2>
      <div className="order-details">
        <h3>Detail Pesanan</h3>
        <ul>
          {orderData.cart.map((item, index) => (
            <li key={index}>
              {item.name} x{item.quantity} - Rp{(item.price * item.quantity).toLocaleString()}
            </li>
          ))}
        </ul>
        <p><strong>Total:</strong> Rp{orderData.total.toLocaleString()}</p>
        <p><strong>Metode Pembayaran:</strong> {orderData.paymentMethod}</p>
        <p><strong>Opsi Pengambilan:</strong> {orderData.pickupOption}</p>
        {orderData.pickupOption === "Makan di Tempat" && (
          <p><strong>Jumlah Orang:</strong> {orderData.numberOfPeople}</p>
        )}
        <p><strong>Catatan:</strong> {orderData.orderNote || "Tidak ada catatan."}</p>
        <p><strong>Waktu Pemesanan:</strong> {orderData.time}</p>
      </div>
      <button onClick={() => navigate("/")}>Kembali ke Beranda</button>
    </div>
  );
};

export default OrderSummary;
