// SellerDetail.js
import React from 'react';

const SellerDetail = ({ seller, onApprove, onReject }) => {
  if (!seller) return null;

  return (
    <div>
      <h2>{seller.name}</h2>
      <img src={seller.image} alt={seller.name} width={100} height={100} />
      <p>{seller.description}</p>
      <p>Email: {seller.email}</p>
      <p>Address: {seller.address}</p>
      <button onClick={() => onApprove(seller.id)}>Approve</button>
      <button onClick={() => onReject(seller.id)}>Reject</button>
    </div>
  );
};

export default SellerDetail;
