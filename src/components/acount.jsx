import { Link } from 'react-router-dom';

function Acount() {
  return (
    <div>
      <div className='login-container-account'>
        <div className='button-register'>
          <Link to='/register'>
            <button>Registrarse</button>
          </Link>
        </div>
        <div className='button-login'>
          <Link to='/login'>
            <button>Iniciar Sesión</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Acount;
