import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  gap: 1rem; // Add gap between image and details
`;

const ProductImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 5px;
  cursor: pointer; // Make the image clickable
`;

const ProductDetails = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

const ProductTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.darkGreen};
`;

const ProductRating = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const ProductQuantity = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  background: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: ${({ theme }) => theme.colors.dark};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem; // Add gap between buttons
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background: ${({ theme }) => theme.colors.dark};
  }
`;

const Cart = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Plant 1', image: '/plant3.jpg', quantity: 2, price: '$29.99', rating: '4.5/5' },
    { id: 2, title: 'Plant 2', image: '/plant4.jpg', quantity: 1, price: '$19.99', rating: '4.0/5' },
  ]);

  const handleQuantityChange = (id, increment) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) } // Ensure quantity is at least 1
          : item
      )
    );
  };

  const handleImageClick = (id) => {
    navigate(`/product/${id}`); // Navigate to product detail page
  };

  return (
    <Container>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <ProductCard key={item.id}>
          <ProductImage
            src={item.image}
            alt={item.title}
            onClick={() => handleImageClick(item.id)} // Make image clickable
          />
          <ProductDetails>
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>Price: {item.price}</ProductPrice>
            <ProductRating>Rating: {item.rating}</ProductRating>
            <ProductQuantity>Quantity:</ProductQuantity>
            <QuantityControl>
              <QuantityButton onClick={() => handleQuantityChange(item.id, -1)}>-</QuantityButton>
              <p>{item.quantity}</p>
              <QuantityButton onClick={() => handleQuantityChange(item.id, 1)}>+</QuantityButton>
            </QuantityControl>
            <ButtonContainer>
              <Button>Buy Now</Button>
              <Button><FaTrashAlt /> Remove</Button>
            </ButtonContainer>
          </ProductDetails>
        </ProductCard>
      ))}
    </Container>
  );
};

export default Cart;
