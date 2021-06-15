import { createContext, useContext, useState, useEffect } from 'react';

import firebase from '../firebase';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
            try {
                if (user) {
                    setUser(user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('err', error);
            } finally {
                setLoadingUser(false);
            }
        });

        return () => {
            unsubscriber();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loadingUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
