import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Login = () => {
  return <div>Login</div>;
};

const Dashboard = () => {
  return <div>Dashboard</div>;
};

const Stock = () => {
  return <div>Stock</div>;
};

const SearchProducts = () => {
  return <div>Search Products</div>;
};

const DetailsProduct = () => {
  return <div>Details Product</div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/stock">Stock</Link>
            </li>
            <li>
              <Link to="/search">Search Products</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/search" element={<SearchProducts />} />
          <Route path="/product/:id" element={<DetailsProduct />} /> {/* Example of a route with a parameter */}
          <Route path="/" element={<Login />} />  {/* Redirect to login as default */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
