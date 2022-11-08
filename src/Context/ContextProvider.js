import React, { Children, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({ displayName: "jaber" })

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        CreateUser,
        LogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;