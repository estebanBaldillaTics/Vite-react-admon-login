import { Link } from 'react-router-dom';

function Acount() {
  return (
    <div>
      <div className='login-container'>
        <Link to='/register'>
          <button>Registrarse</button>
        </Link>
        <Link to='/login'>
          <button>Iniciar Sesión</button>
        </Link>
      </div>
    </div>
  );
}

export default Acount;
