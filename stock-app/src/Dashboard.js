import React from 'react';
import { products } from './Stock';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // Import the logo

function Dashboard() {
  const totalProducts = products.reduce((acc, product) => acc + product.quantity, 0);
  const totalDifferentProducts = products.length;

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Stock Management" />
        <h1>Stock Management</h1>
      </header>

      <div className="cards-container">
        <div className="card">
          <h2>Welcome to Stock Management</h2>
          <p>Here's a summary of your stock:</p>
          <p>Total Products in Stock: {totalProducts}</p>
          <p>Number of Different Products: {totalDifferentProducts}</p>
        </div>

        <div className="card">
          <Link to="/stock">
            <h2>Go to Stock Management</h2>
          </Link>
          <Link to="/search">
            <h2>Go to Search Products</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
