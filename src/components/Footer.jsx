import React, { useState } from 'react';
import styled from 'styled-components';
import VendorRegistrationModal from './VendorRegistrationModal'; // Import the modal component

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.light};
  padding: 1rem 2rem;
  text-align: center;
  font-size: 0.875rem;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  margin: 0 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BecomeSellerButton = styled.button`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.darkGreen};
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <FooterContainer>
        <FooterText>
          &copy; {new Date().getFullYear()} Verdure. All rights reserved.
        </FooterText>
        <FooterText>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
        </FooterText>
        <BecomeSellerButton onClick={openModal}>Become a Seller</BecomeSellerButton>
      </FooterContainer>
      {isModalOpen && <VendorRegistrationModal onClose={closeModal} />}
    </>
  );
};

export default Footer;
