import React, { useState } from 'react';
import { createUser } from '../api/api';
import { Link, useNavigate } from 'react-router-dom';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('USER');
  const [registered, setRegistered] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await createUser({
        name,
        email,
        password,
        rol,
      });
      navigate('/login');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };


  return (
    <div className='register-container'>
      <h1>Registro de Usuarios</h1>
      {registered ? (
        <div>
          <p>¡Registro exitoso! Ahora puedes iniciar sesión.</p>
        </div>
      ) : (
        <div>
          <form onSubmit={handleRegister}>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div>
              <label htmlFor="rol">Rol:</label>
              <select
                id="rol"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
              >
                <option value="USER">Usuario</option>
                <option value="ADMIN">Administrador</option>
              </select>
            </div>
            <button type="submit">Registrar</button>
          </form>
          {error && <p>{error}</p>}
          <Link to='/account'>
            <button>Regresar</button>
          </Link>
          <Link to='/login'>
            <button>Iniciar session</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Register;
