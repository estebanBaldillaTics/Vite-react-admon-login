import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home({ loggedIn }) {
  const navigateTo = useNavigate();

  if (!loggedIn) {
    return (
      <div>
        <h1>Necesitas iniciar session</h1>
        <Link to="/login">Iniciar session</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Página de inicio</h1>
      <Link to="/login">Cerrar sesión</Link>
    </div>
  );
}

export default Home;
