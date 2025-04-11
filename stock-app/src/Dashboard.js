import React from 'react';
import { products } from './Stock';

function Dashboard() {
  const totalProducts = products.reduce((acc, product) => acc + product.quantity, 0);
  const totalDifferentProducts = products.length;

  return (
    <div>
      <h2>Welcome to the Stock Management App!</h2>
      <p>Here's a quick overview of your stock:</p>
      <ul>
        <li>Total Products in Stock: {totalProducts}</li>
        <li>Number of Different Products: {totalDifferentProducts}</li>
      </ul>
    </div>
  );
}

export default Dashboard;