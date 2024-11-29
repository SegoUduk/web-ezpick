import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import Beranda from "./pages/Beranda";
import Rekomendasi from "./pages/Rekomendasi";
import Promo from "./pages/Promo";
import Paket from "./pages/Paket";
import Makanan from "./pages/Makanan";
import Minuman from "./pages/Minuman";
import OrderSummary from "./components/OrderSummary";

const App = () => {
  return (
    <AuthProvider> {/* Wrap with AuthProvider */}
      <CartProvider> {/* Wrap with CartProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/rekomendasi" element={<Rekomendasi />} />
            <Route path="/Promo" element={<Promo />} />
            <Route path="/Paket" element={<Paket />} />
            <Route path="/Makanan" element={<Makanan />} />
            <Route path="/Minuman" element={<Minuman />} />
            <Route path="/OrderSummary" element={<OrderSummary />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
