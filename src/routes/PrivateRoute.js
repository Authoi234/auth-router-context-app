import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if (loading) {
        return <div className='flex justify-center'><span className="loading loading-spinner text-secondary"></span>loading<span className="loading loading-dots loading-sm"></span></div>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;