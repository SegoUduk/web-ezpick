import React, { useState } from 'react';
import './EditProfil.css';

const EditProfil = ({ onBack, profileData, onUpdateProfile }) => {
  const [name, setName] = useState(profileData.name);
  const [photo, setPhoto] = useState(profileData.photo);

  const handlePhotoChange = () => {
    const newPhoto = window.prompt('Masukkan URL foto baru:', photo);
    if (newPhoto) setPhoto(newPhoto);
  };

  const handleConfirm = () => {
    onUpdateProfile({ name, photo });
    onBack(); // Kembali ke menu utama
  };

  return (
    <div className="edit-profil-container">
      <button className="back-button" onClick={onBack}>
        ←
      </button>
      <h2 className="edit-profil-header">EDIT PROFIL</h2>
      <div className="edit-profil-content">
        <div className="edit-photo">
          <img src={photo} alt="Profile" className="profile-photo" />
          <button className="edit-photo-button" onClick={handlePhotoChange}>
            Ganti Profil
          </button>
        </div>
        <input 
          type="text" 
          className="nickname-input" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Ubah Nickname" 
        />
        <button className="confirm-button" onClick={handleConfirm}>
          Konfirmasi
        </button>
      </div>
    </div>
  );
};

export default EditProfil;
