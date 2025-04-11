import React from 'react';

const DetailsProduct = () => {
  const product = {
    id: 1,
    name: 'Product Name',
    quantity: 10,
    description: 'This is a detailed description of the product.',
  };

  return (
    <div>
      <h2>Product Details</h2>
      <div>
        <strong>Name:</strong> {product.name}
      </div>
      <div>
        <strong>Quantity:</strong> {product.quantity}
      </div>
      <div>
        <strong>Description:</strong> {product.description}
      </div>
    </div>
  );
};

export default DetailsProduct;