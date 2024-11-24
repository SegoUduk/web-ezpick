import React from 'react';
import './EditProfil.css';

const EditProfil = ({ onBack }) => {
  return (
    <div className="edit-profil-container">
      {/* Tombol kembali di kiri atas */}
      <button className="back-button" onClick={onBack}>
        ←
      </button>
      <h2 className="edit-profil-header">EDIT PROFIL</h2>
      {/* Konten yang sudah ada sebelumnya */}
      <div className="edit-profil-content">
        <div className="edit-photo">
          <div className="profile-photo"></div>
          <button className="edit-photo-button">Ganti Profil</button>
        </div>
        <input 
          type="text" 
          className="nickname-input" 
          placeholder="Ubah Nickname" 
        />
        <button className="confirm-button">Konfirmasi</button>
      </div>
    </div>
  );
};

export default EditProfil;
