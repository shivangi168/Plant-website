import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ProductDetail from './pages/product/ProductDetail';
import UserDashboard from './pages/user/UserDashboard';
import Cart from './pages/user/Cart';
import Wishlist from './pages/user/Wishlist';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './components/styles/Globalstyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/profile" element={<UserDashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
