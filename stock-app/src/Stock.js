import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import products from './products';
import './App.css'; // Import the CSS file

export function Stock() {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([]);

  const handleEdit = id => {
    // Implement your edit functionality here
    console.log(`Edit product with id ${id}`);
  };

  const clearInput = () => {
    // Implement your clear input functionality here
    console.log('Clear input');
  };

  return (
    <div className="container">
      <div className="header">
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
          <i className="fas fa-chevron-left back-icon"> </i>
        </Link>
        <div className="logo">
          <img src="./assets/logo.png" alt="Logo" height="60" width="60" />
          <span> Stock App </span>
        </div>
        <Link to="/search" style={{ textDecoration: 'none', color: 'inherit' }}>
          <i className="fas fa-chevron-right next-icon"></i>
        </Link>
      </div>

      <div className="search-bar">
        <button className="button">
          <i className="fas fa-search"> </i>
        </button>
        <input type="text" placeholder="Pesquisar" />
        <button onClick={clearInput}>
          <i className="fas fa-times-circle clear-icon"></i>
        </button>
      </div>

      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} height="150" width="150" />
            <div className="product-info">
              <div className="product-brand">{product.brand}</div>
              <div className="product-stock">Estoque {product.stock}</div>
              <div className="product-description">{product.description}</div>
              <div className="product-price">Por R$ {product.price.toFixed(2)}</div>
              <div className="product-buttons">
                <button onClick={() => handleEdit(product.id)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
