import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../api/api';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn] = useState(false);
  const [error] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className='login-container'>
      <h1>Iniciar Sesión</h1>
      {loggedIn ? (
        <div>
          <p>¡Bienvenido! Has iniciado sesión.</p>
          <button onClick={() => onBackToLogin()}>Volver al inicio de sesión</button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Iniciar sesión</button>
          </form>
          {error && <p>Error: {error}</p>}
          <Link to='/account'>
            <button>Regresar</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
