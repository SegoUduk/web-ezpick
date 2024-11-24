import React from 'react';
import './Notifikasi.css';

const Notifikasi = ({ onBack }) => {
  return (
    <div className="notifikasi-container">
      {/* Tombol Kembali */}
      <button className="back-button" onClick={onBack}>
        ← Kembali
      </button>
      <h2 className="notifikasi-header">NOTIFIKASI</h2>
      <div className="notifikasi-content">
        <p>• Pesanan anda akan selesai dalam 15 menit, silahkan datang ke resto untuk melakukan pengambilan pesanan.</p>
      </div>
    </div>
  );
};

export default Notifikasi;
