import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();
  
  const closeSession = () =>{
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  }

  if (!isLoggedIn) {
    return (
      <div>
        <h1>Necesitas iniciar sesión</h1>
        <Link to="/login">Iniciar sesión</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Página de inicio</h1>
      <button onClick={closeSession}>Cerrar sesión</button>
    </div>
  );
}

export default Home;
