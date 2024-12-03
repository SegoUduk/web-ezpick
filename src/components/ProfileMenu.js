import React, { useState } from 'react';
import Notifikasi from './Notifikasi';
import Riwayat from './Riwayat';
import EditProfil from './EditProfil';
import './ProfileMenu.css';

const ProfileMenu = ({ onLogout, onClose }) => {
  const [currentPage, setCurrentPage] = useState('');
  const [profileData, setProfileData] = useState({
    name: 'Nama Pengguna', // Nama default
    photo: 'https://via.placeholder.com/100', // Gambar default
  });

  const handleNavigation = (page) => {
    setCurrentPage(page); // Navigasi ke halaman yang dipilih
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileData((prevData) => ({
          ...prevData,
          photo: reader.result, // Perbarui foto profil
        }));
      };
      reader.readAsDataURL(file); // Baca file sebagai data URL
    }
  };

  return (
    <div className="profile-menu">
      {/* Menu Utama */}
      {currentPage === '' && (
        <div className="profile-menu-main">
          <button className="close-button" onClick={onClose}>X</button>
          <div className="profile-menu-header">
            <div className="profile-image-wrapper">
              <img 
                src={profileData.photo} 
                alt="Profile" 
                className="profile-menu-image" 
              />
              <input 
                type="file" 
                accept="image/*" 
                className="profile-image-input" 
                onChange={handlePhotoChange} 
              />
            </div>
            <p>{profileData.name}</p>
          </div>
          <button 
            className="profile-menu-item" 
            onClick={() => handleNavigation('Notifikasi')}
          >
            Notifikasi
          </button>
          <button 
            className="profile-menu-item" 
            onClick={() => handleNavigation('Riwayat')}
          >
            Riwayat
          </button>
          <button 
            className="profile-menu-item" 
            onClick={() => handleNavigation('Edit Profil')}
          >
            Edit Profil
          </button>
          <button 
            className="profile-menu-item logout-button" 
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      )}

      {/* Halaman Notifikasi */}
      {currentPage === 'Notifikasi' && <Notifikasi onBack={() => setCurrentPage('')} />}

      {/* Halaman Riwayat */}
      {currentPage === 'Riwayat' && <Riwayat onBack={() => setCurrentPage('')} />}

      {/* Halaman Edit Profil */}
      {currentPage === 'Edit Profil' && (
        <EditProfil 
          onBack={() => setCurrentPage('')} 
          profileData={profileData} 
          onUpdateProfile={setProfileData} 
        />
      )}
    </div>
  );
};

export default ProfileMenu;
