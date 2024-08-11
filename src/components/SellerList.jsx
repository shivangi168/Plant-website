// SellerList.js
import React from 'react';
import { sellers } from './sampleData';

const SellerList = ({ onSellerClick }) => {
  return (
    <div>
      <h2>Seller List</h2>
      <ul>
        {sellers.map(seller => (
          <li key={seller.id} onClick={() => onSellerClick(seller)}>
            {seller.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerList;
