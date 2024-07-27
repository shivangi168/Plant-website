// Layout.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the matching child route */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
