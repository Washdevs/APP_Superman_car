import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Importe o arquivo CSS
import Logo3 from './assets/Logo3.png'; // Importe o logotipo

const mockProducts = [
  {
    id: 1,
    name: 'Fonte Carregador Automotivo Storm 40A',
    brand: 'JFA',
    stock: 100,
    stockValue: 'R$ 100.00',
    price: 'R$ 300,00',
    image: '/assets/Fonte.jpg',
  },
  {
    id: 2,
    name: 'Módulo Amplificador Digital Taramps MD 8000',
    brand: 'Taramps',
    stock: 100,
    stockValue: 'R$ 100.00',
    price: 'R$ 1.200,00',
    image: '/assets/modulo.png',
  },
  {
    id: 3,
    name: 'Subwoofer 15" JBL Selenium Tornado 15SWT2200 - 1100 Watts RMS',
    brand: 'JBL',
    stock: 100,
    stockValue: 'R$ 100.00',
    price: 'R$ 700,00',
    image: '/assets/subwoofer.png',
  },
];

function SearchProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(mockProducts);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); // Filtra os produtos pelo termo de pesquisa

  const clearInput = () => {
    setSearchTerm('');
  }; // Limpa o campo de pesquisa

  return (
    <div className="search-products-page">
      <div className="header">
        <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
          <i className="fas fa-chevron-left back-button" id="left-arrow"></i>
        </Link>
        <img src={Logo3} alt="Informações do Produto" className="header-logo" />
        <i className="fas fa-chevron-right next-button" id="right-arrow"></i>
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          id="input"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        {searchTerm && <i className="fas fa-times" onClick={clearInput}></i>}
      </div>

      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <span className="badge badge-red">{product.brand}</span>
              <h2>{product.name}</h2>
              <span className="stock">Estoque {product.stock}</span>
              <div className="badge badge-blue">Valor Estoque {product.stockValue}</div>
              <div className="price">{product.price}</div>
              <Link to={`/details/${product.id}`} className="btn-detail">
                Ver Detalhe
              </Link>
            </div>
          </div>
        ))}
      </div>
      <nav className="bottom-nav">
        <Link to="/dashboard" className="nav-item">
          <i className="fas fa-home"></i>
          <br />
          Início
        </Link>
        <Link to="/stock" className="nav-item active">
          <i className="fas fa-box"></i>
          <br />
          Produtos
        </Link>
        <Link to="/settings" className="nav-item">
          <i className="fas fa-cog"></i>
          <br />
          Serviços
        </Link>
        <Link to="/menu" className="nav-item">
          <i className="fas fa-bars"></i>
          <br />
          Menu
        </Link>
      </nav>
    </div>
  );
}
export default SearchProducts;
