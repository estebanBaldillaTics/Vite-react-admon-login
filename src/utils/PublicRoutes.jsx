import { Routes, Route } from 'react-router-dom';
import Account from '../components/acount';
import Register from '../components/Register'
import LoginForm from '../components/LoginForm'
import Dashboard from '../components/dashboard'
import NotFound from '../components/NotFound';

const PublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Account />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<LoginForm />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default PublicRoutes;