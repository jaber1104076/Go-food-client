import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () => {
        return signOut(auth)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user in the website', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        CreateUser,
        LogIn,
        LogOut,
        googleSignIn,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;