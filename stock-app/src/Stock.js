import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the CSS file

function Stock() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Caixa de Som',
      brand: 'Superman',
      stock: 500,
      description: 'Caixa de Som Bluetooth',
      price: 500.00,
      image: '/assets/imagens/caixadesom.png',
    },
    {
      id: 2,
      name: 'Product 2',
      brand: 'JFA',
      stock: 500,
      description: 'Descrição do produto - Descrição do p...',
      price: 0.00,
      image: '/assets/imagens/Fonte.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      brand: 'Philips',
      stock: 500,
      description: 'Descrição do produto - Descrição do p...',
      price: 0.00,
      image: '/assets/imagens/lampada.png',
    },
    {
      id: 4,
      name: 'Product 4',
      brand: 'Taramps',
      stock: 500,
      description: 'Descrição do produto - Descrição do p...',
      price: 0.00,
      image: '/assets/imagens/modulo.png',
    },
    {
      id: 5,
      name: 'Product 5',
      brand: 'Stetsom',
      stock: 500,
      description: 'Descrição do produto - Descrição do p...',
      price: 0.00,
      image: '/assets/imagens/modulostet.png',
    },
  ]);

  const handleEdit = (id) => {
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
          <img src="/assets/imagens/Logo.png" alt="Logo" height="60" width="60" />
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
        {products.map((product) => (
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
export default Stock;