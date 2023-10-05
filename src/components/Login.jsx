import { Routes, Route } from 'react-router-dom';
import Account from './acount';
import Register from './Register'
import LoginForm from './LoginForm'
import Dashboard from './dashboard'

function Login() {
  return (
    <div>
      <div className='login-container'>
        <Routes>
          <Route path='/account' element={<Account />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default Login;
