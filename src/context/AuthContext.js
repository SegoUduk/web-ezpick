import React, { createContext, useState, useContext } from 'react';

// Membuat konteks autentikasi
const AuthContext = createContext();

// Provider untuk membungkus aplikasi
export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null); // Role bisa "user", "admin", atau null (belum login)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fungsi untuk login
  const login = (role) => {
    setIsLoggedIn(true);
    setUserRole(role); // Tetapkan peran pengguna (admin atau user)
  };

  // Fungsi untuk logout
  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null); // Hapus peran pengguna
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk menggunakan AuthContext
export const useAuth = () => useContext(AuthContext);
