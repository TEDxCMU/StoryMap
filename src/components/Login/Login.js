import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

import app from '../../firebase';
import { useAuth } from '../../lib/auth-provider';
import styles from './Login.module.scss';

function Login() {
    const AuthContext = useAuth();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        if (AuthContext.user) {
            history.push('/admin');
        }
    }, [history, AuthContext]);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await app.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            await app.auth().signInWithEmailAndPassword(email, password);
            history.push('/admin');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <main className={styles.login}>
            <h1>Login</h1>
            <form className={styles.login__form}>
                <label className={styles.login__label} htmlFor="email">
                    Email
                </label>
                <input
                    className={styles.login__input}
                    type="text"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmail}
                />
                <label className={styles.login__label} htmlFor="password">
                    Password
                </label>
                <input
                    className={styles.login__input}
                    type="password"
                    name="password"
                    autoComplete="password"
                    value={password}
                    onChange={handlePassword}
                />
                <button className={styles.login__btn} type="submit" onClick={handleLogin}>
                    Log In
                </button>
                <div className={styles.login__error} role="alert">
                    {error && error}
                </div>
            </form>
        </main>
    );
}

export default Login;
