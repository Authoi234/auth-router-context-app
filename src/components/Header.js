import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log('context', user);

    const handleSignOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
                <Link  className='btn btn-ghost normal-case text-xl' to={'/'}>Home</Link>
                <Link  className='btn btn-ghost normal-case text-xl' to={'/orders'}>Orders</Link>
                <Link  className='btn btn-ghost normal-case text-xl' to={'/login'}>Login</Link>
                <Link  className='btn btn-ghost normal-case text-xl' to={'/register'}>Register</Link>
                {user?.email && <span>Welcome, {user.email}</span>}
                {user?.email ? 
                    <button onClick={handleSignOut} className="btn btn-sm btn-ghost btn-active">Log Out</button>
                    :
                    <Link to={'/login'}>
                        <button className='btn btn-sm btn-ghost hover:bg-violet-600 hover:animate-bounce active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Log In</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Header;