import React from "react";

function Home({ username, onLogout }) {
  return (
    <div>
      <h2>Bienvenido, {username}!</h2>
      <button onClick={onLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Home;
