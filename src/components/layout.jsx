// Layout.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const Layout = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>
        <Outlet /> {/* Renders the content for the current route */}
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
