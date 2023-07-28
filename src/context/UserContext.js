import React, { createContext } from 'react';

const AuthContext = createContext();

const UserContext = ({children}) => {
    const user = {displayName: 'Akash'};
    const authInfo = {user};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;