import React, { useEffect, useState } from "react";
import "./Riwayat.css";

const Riwayat = ({ onBack }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrderHistory(storedOrders);
  }, []);

  const handleClearHistory = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus semua riwayat?")) {
      localStorage.removeItem("orderHistory");
      setOrderHistory([]);
    }
  };

  return (
    <div className="riwayat-container">
      {/* Tombol Kembali */}
      <button className="back-button" onClick={onBack}>
        ←
      </button>

      {/* Header Riwayat */}
      <h2 className="riwayat-header">RIWAYAT</h2>

      {/* Tombol Hapus Riwayat */}
      {orderHistory.length > 0 && (
        <button className="clear-history-button" onClick={handleClearHistory}>
          Hapus Semua Riwayat
        </button>
      )}

      {/* Konten Riwayat */}
      <div className="riwayat-content">
        {orderHistory.length > 0 ? (
          <ul className="riwayat-list">
            {orderHistory.map((order, index) => (
              <li key={index} className="riwayat-item">
                <p>
                  <strong>Waktu:</strong> {order.time}
                </p>
                <p>
                  <strong>Pesanan:</strong>{" "}
                  {order.cart.map((item) => `${item.name} x${item.quantity}`).join(", ")}
                </p>
                <p>
                  <strong>Total:</strong> Rp{order.total.toLocaleString()}
                </p>
                <p>
                  <strong>Metode Pembayaran:</strong> {order.paymentMethod}
                </p>
                <p>
                  <strong>Opsi Pengambilan:</strong> {order.pickupOption}
                </p>
                {order.pickupOption === "Makan di Tempat" && (
                  <p>
                    <strong>Jumlah Orang:</strong> {order.numberOfPeople}
                  </p>
                )}
                <p>
                  <strong>Catatan:</strong> {order.orderNote || "Tidak ada catatan."}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Belum ada riwayat pesanan.</p>
        )}
      </div>
    </div>
  );
};

export default Riwayat;
