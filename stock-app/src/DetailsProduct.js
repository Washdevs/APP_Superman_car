import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import general styles
import logo from './assets/Logo3.png'; // Import logo from the correct place.
import productImg from './assets/Fonte.jpg'; // Import the product image from the correct place.

const DetailsProduct = () => {
  const product = {
    name: 'Fonte Carregador Automotivo Storm 60A 600W Bivolt com Multímetro',
    brand: 'JFA',
    price: '300,00',
    stock: '5',
    description: 'O Carregador Automotivo Storm 60A da JFA é uma fonte de alimentação potente e versátil, ideal para oficinas e entusiastas automotivos. Com 600W de potência e operação bivolt, este carregador oferece uma solução confiável para carregar baterias e fornecer energia para diversos equipamentos automotivos.\nCaracterísticas principais:\nPotência: 600W\nCorrente máxima: 60A\nBivolt automático\nMultímetro integrado para medições precisas\nDisplay digital para fácil leitura\nProteção contra curto-circuito e sobrecarga',
  };

  return (
    <div>
      <div className="header">
        <Link to="/search">
        <button className="back-button" >
          <i className="fas fa-chevron-left"></i>
        </button>
        </Link>
        <img src={logo} alt="Logo" className="header-logo" />
      </div>

      <img
        alt={product.name}
        className="product-image"
        src={productImg} // Use the imported image
      />

      <div className="product-info">
        <span className="brand-tag"> {product.brand} </span>
        <h1 className="product-title">
          {product.name}
        </h1>
        <div className="price">R$ {product.price}</div>
        <div className="stock-info">
          <span className="stock-tag"><b>Estoque: {product.stock}</b></span>
          <span className="stock-value"><b>Valor Estoque R$ {parseFloat(product.price.replace('.', '').replace(',', '.')) * parseInt(product.stock)}</b></span>
          <span className="cart-button">
            <a href="/">
              <i className="fa fa-shopping-cart buy-button"></i>
            </a>
          </span>
        </div>
      </div>

      <div className="description">
        <h3>Descrição do Produto</h3>
        <p>
          {product.description}
        </p>
      </div>
      <div className="buy-button-container">
        <a className="buy-button" href="/"> Comprar Agora </a>
      </div>

      <nav className="bottom-nav">
        <Link className="nav-item" to="/">
          <i className="fas fa-home"> </i> <br /> Início
        </Link>
        <Link className="nav-item active" to="/stock">
          <i className="fas fa-box"> </i> <br /> Produtos
        </Link>
        <Link className="nav-item" to="/">
          <i className="fas fa-cog"> </i> <br /> Serviços
        </Link>
        <Link className="nav-item" to="/">
          <i className="fas fa-bars"> </i> <br /> Menu
        </Link>
      </nav>
    </div>
  );
};

export default DetailsProduct;
