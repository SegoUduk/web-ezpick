import React, { useState } from 'react';
import Notifikasi from './Notifikasi';
import Riwayat from './Riwayat';
import EditProfil from './EditProfil';
import './ProfileMenu.css';

const ProfileMenu = ({ onLogout, onClose }) => {
  const [currentPage, setCurrentPage] = useState('');

  const handleNavigation = (page) => {
    setCurrentPage(page); // Navigasi ke halaman yang dipilih
  };

  return (
    <div className="profile-menu">
      {/* Menu Utama */}
      {currentPage === '' && (
        <div className="profile-menu-main">
          <button className="close-button" onClick={onClose}>X</button>
          <div className="profile-menu-header">
            <img 
              src="https://via.placeholder.com/100"
              alt="Profile" 
              className="profile-menu-image" 
            />
            <p>Nama Pengguna</p>
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
      {currentPage === 'Edit Profil' && <EditProfil onBack={() => setCurrentPage('')} />}
    </div>
  );
};

export default ProfileMenu;
