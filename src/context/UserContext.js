import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: 'Authoi'});
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log('auth state changed',currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {loading ,user, createUser, signIn, logOut, signInWithGoogle};


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;