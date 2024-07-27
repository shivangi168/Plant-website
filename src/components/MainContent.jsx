import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

<Navbar></Navbar>

const Container = styled.div`
  padding: 2rem;
`;

const Banner = styled.div`
  background: url('/water_leaves_rain.jpg') center/cover no-repeat;
  color: ${({ theme }) => theme.colors.light};
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Filter = styled.button`
  background: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.darkGreen};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.darkGreen};
  cursor: pointer;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.light};
  }
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCard = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  text-align: center;
  width: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ProductImage = styled.img`
  border-radius: 10px;
  height: 150px;
  width: 100%;
`;

const ProductTitle = styled.h3`
  margin: 1rem 0;
`;

const ViewDetailsButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.darkGreen};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.light};
  padding: 0.5rem 1rem;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGreen};
  }
`;

const plantImages = [
  '/water_leaves.jpg',
  '/plant2.jpg',
  '/plant3.jpg',
  '/plant4.jpg',
  '/plant5.jpg',
  '/plant2.jpg',
  '/plant2.jpg',
  '/plant2.jpg',
  '/plant2.jpg',

];

const MainContent = () => {
  return (
    <Container>
      <Banner>
        <Title>All Plants</Title>
        <Subtitle>
          A wide variety of plants are waiting for you here to become your best friend.
          Use the filter to find your perfect match.
        </Subtitle>
      </Banner>
      <Filters>
        <Filter>Look</Filter>
        <Filter>Family</Filter>
        <Filter>Room</Filter>
        <Filter>Difficulty</Filter>
        <Filter>Light</Filter>
        <Filter>Size</Filter>
        <Filter>Special Features</Filter>
        <Filter>Sort By</Filter>
      </Filters>
      <Products>
        {plantImages.map((image, index) => (
          <ProductCard key={index}>
            <ProductImage src={image} alt={`Plant ${index + 1}`} />
            <ProductTitle>Plant {index + 1}</ProductTitle>
            <ViewDetailsButton to={`/product/${index}`}>View Details</ViewDetailsButton>
          </ProductCard>
        ))}
      </Products>
    </Container>
  );
};

export default MainContent;
