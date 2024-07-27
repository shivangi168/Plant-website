// src/pages/product/ProductDetail.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaHeart, FaCartPlus } from 'react-icons/fa';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkGreen};
  margin-bottom: 2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

const ProductSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const DetailsContainer = styled.div`
  flex: 2;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 0;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const Rating = styled.p`
  font-size: 1.25rem;
  margin-top: 1rem;
`;

const QuantitySelector = styled.select`
  margin-top: 1rem;
  padding: 0.5rem;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #2c6f41; // Dark green button
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1f4a30;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkGreen};

  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

const AboutSection = styled.div`
  margin-bottom: 2rem;
`;

const SimilarProductsSection = styled.div`
  margin-top: 3rem;
`;

const SimilarProductsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SimilarProductCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  margin: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  width: 250px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const SimilarProductImage = styled.img`
  border-radius: 1px;
  height: 170px;
  width: 100%;
`;

const SimilarProductTitle = styled.h3`
  margin: 0.5rem 0;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const plantDetails = {
    title: `Plant ${parseInt(id, 10) + 1}`,
    description: 'This is a detailed description of the plant.',
    image: '/plant2.jpg',
    price: '$29.99',
    rating: '4.5/5',
    availableQuantity: [1, 2, 3, 4, 5],
  };

  const similarProducts = [
    { title: 'Similar Plant 1', image: '/plant3.jpg' },
    { title: 'Similar Plant 2', image: '/plant4.jpg' },
    { title: 'Similar Plant 3', image: '/plant5.jpg' },
    { title: 'Similar Plant 4', image: '/plant5.jpg' },
  ];

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = () => {
    setCartItems([...cartItems, plantDetails.title]);
  };

  return (
    <Container>
      <BackButton onClick={() => navigate('/')}>
        <FaArrowLeft /> Back to Main Page
      </BackButton>

      <ProductSection>
        <ImageContainer>
          <Image src={plantDetails.image} alt={plantDetails.title} />
        </ImageContainer>
        <DetailsContainer>
          <Title>{plantDetails.title}</Title>
          <Price>{plantDetails.price}</Price>
          <Rating>Rating: {plantDetails.rating}</Rating>
          <QuantitySelector>
            {plantDetails.availableQuantity.map((qty) => (
              <option key={qty} value={qty}>{qty}</option>
            ))}
          </QuantitySelector>
          <Description>{plantDetails.description}</Description>
          <ButtonRow>
            <Button onClick={handleAddToCart}>Buy Now</Button>
            <IconButton onClick={handleWishlist}>
              <FaHeart color={isWishlisted ? 'red' : 'gray'} />
            </IconButton>
            <IconButton onClick={handleAddToCart}>
              <FaCartPlus />
            </IconButton>
          </ButtonRow>
        </DetailsContainer>
      </ProductSection>

      <AboutSection>
        <h2>About This Plant</h2>
        <p>
          This plant is a perfect addition to your home or garden. It requires minimal care and adds a touch of greenery to your space. Ideal for both beginners and experienced plant enthusiasts, it brings freshness and vitality to any environment.
        </p>
        <p>
          Vivamus porta arcu non laoreet ornare. Vestibulum ultricies venenatis efficitur. Praesent gravida congue massa. Suspendisse sed turpis quam. Ut nunc urna, pretium et ante a, molestie suscipit augue. Nunc et tellus id metus euismod dictum at id ante. Nam luctus, diam ultricies fringilla tempor, velit orci molestie quam, id bibendum dolor urna tempus nisi. Fusce cursus sem eget convallis faucibus. Donec non massa vitae tellus lobortis scelerisque eget ut tortor. Phasellus ac mollis elit. Cras elit nisl, tempus quis massa vel, dignissim rhoncus justo. Suspendisse laoreet, orci eget laoreet egestas, diam nibh pretium nisl, a molestie odio nulla in ipsum. Mauris luctus nulla malesuada nisi finibus consectetur. Duis id scelerisque ex. Nam rhoncus venenatis ante a cursus. Praesent a nunc nec mi maximus porttitor id sit amet quam.
        </p>
      </AboutSection>

      <SimilarProductsSection>
        <h2>Similar Products</h2>
        <SimilarProductsRow>
          {similarProducts.map((product, index) => (
            <SimilarProductCard key={index}>
              <SimilarProductImage src={product.image} alt={product.title} />
              <SimilarProductTitle>{product.title}</SimilarProductTitle>
              <IconContainer>
                <IconButton onClick={() => console.log('Add to Wishlist')}>
                  <FaHeart />
                </IconButton>
                <Button onClick={() => window.location.href=`/product/${index}`}>View</Button>
                <IconButton onClick={() => console.log('Add to Cart')}>
                  <FaCartPlus />
                </IconButton>
              </IconContainer>
            </SimilarProductCard>
          ))}
        </SimilarProductsRow>
      </SimilarProductsSection>
    </Container>
  );
};

export default ProductDetail;
