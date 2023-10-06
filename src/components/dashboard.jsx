import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const user = localStorage.getItem('user');
  const navigate = useNavigate();
  
  const closeSession = () =>{
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  }

  if (!isLoggedIn) {
    return (
      <div className='header-dashboard'>
        <div className='login-content-dashboard'>
          <h1>Necesitas iniciar sesión</h1>
          <Link to="/login">Iniciar sesión</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>Bienvenido {user}</h1>
      <button onClick={closeSession}>Cerrar sesión</button>
    </div>
  );
}

export default Home;
