import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file
import logo from './assets/logo.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Basic authentication for demonstration purposes
    if (username === 'admin' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <body>
      <img
        src={logo}
        alt="Logotipo do Superman em cores vermelhas e amarelas"
        className="logotipo"
      />
      <div className="texto-login">Fazer Login</div>
      <div className="caixa-input">
        <input
          type="text"
          placeholder="Login"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="caixa-input caixa-senha">
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className="botao-entrar" onClick={handleLogin}>
        Entrar
      </button>
    </body>
  );
}

export default Login;
