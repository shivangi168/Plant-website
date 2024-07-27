import React, { useState } from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaHeart, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGreen};
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  margin-left: 2rem;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 5px;

  &:hover,
  &.active {
    background: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.light};
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.darkGreen};
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.dark};
  }
`;

// ... (rest of your code)

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeForm = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to user dashboard
  };

  const handleWishlistClick = () => {
    navigate('/wishlist'); // Navigate to wishlist page
  };

  const handleCartClick = () => {
    navigate('/cart'); // Navigate to cart page
  };
  const hadleplantClick = () =>{
    navigate('/'); // Navigate to
  }

  return (
    <>
      <Nav>
        <Logo>Verdure</Logo>
        <NavItems>
          <NavItem onClick={hadleplantClick}>Plants</NavItem>
          <NavItem href="#">Learn</NavItem>
          <NavItem href="#">Our Roots</NavItem>
          <Icon onClick={handleCartClick}><FaShoppingCart /></Icon>
          <Icon onClick={handleWishlistClick}><FaHeart /></Icon>
          <Icon onClick={handleProfileClick}><FaUserCircle /></Icon>
          <Button onClick={handleLoginClick}>Login</Button>
          <Button onClick={handleSignupClick}>Signup</Button>
        </NavItems>
      </Nav>

      {/* Login and Signup forms */}
      {showLogin && (
        <FormContainer>
          <h2>Login</h2>
          <Form>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <SubmitButton onClick={closeForm}>Submit</SubmitButton>
            <Button onClick={closeForm}>Close</Button>
          </Form>
        </FormContainer>
      )}

      {showSignup && (
        <FormContainer>
          <h2>Signup</h2>
          <Form>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <SubmitButton onClick={closeForm}>Submit</SubmitButton>
            <Button onClick={closeForm}>Close</Button>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default Navbar;
