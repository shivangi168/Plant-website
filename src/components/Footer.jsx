import React from 'react';
import styled from 'styled-components';

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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Verdure. All rights reserved.
      </FooterText>
      <FooterText>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms of Service</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
