import React from 'react';
import './Riwayat.css';

const Riwayat = ({ onBack }) => {
  return (
    <div className="riwayat-container">
      {/* Tombol kembali */}
      <button className="back-button" onClick={onBack}>
        ←
      </button>
      <h2 className="riwayat-header">RIWAYAT</h2>
      {/* Konten Riwayat */}
      <div className="riwayat-content">
        <p>Detail riwayat pesanan anda akan ditampilkan di sini.</p>
      </div>
    </div>
  );
};

export default Riwayat;
