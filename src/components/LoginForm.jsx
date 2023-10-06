import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../models/api';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  return (
    <div className='login-container'>
      <h1>Iniciar Sesión</h1>
      <div className='form-login'>
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
          {error && <p className='error'>{error}</p>}
          <div className='buttons-login'>
            <button type="submit">Iniciar sesión</button>
            <Link to='/account'>
              <button>Regresar</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
