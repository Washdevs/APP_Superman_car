import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Stock from "./Stock";
import SearchProducts from "./SearchProducts";
import DetailsProduct from "./DetailsProduct";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBoxes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/search" element={<SearchProducts />} />
          <Route path="/product/:id" element={<DetailsProduct />} />
          <Route path="/" element={<Login />} />
        </Routes>
        <nav className="bottom-nav">
          <NavLink
            to="/dashboard"
            className="nav-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faHome} />
            <br />
            Início
          </NavLink>
          <NavLink to="/stock" className="nav-item" activeClassName="active">
            <FontAwesomeIcon icon={faBoxes} />
            <br />
            Estoque
          </NavLink>
          <NavLink
            to="/search"
            className="nav-item"
            activeClassName="active"
          >
            <FontAwesomeIcon icon={faSearch} />
            <br />
            Buscar
          </NavLink>
        </nav>
      </div>
    </Router>
  );
};

export default App;

