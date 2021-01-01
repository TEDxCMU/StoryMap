import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

import app from '../../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (app.auth().currentUser) {
            history.push("/admin");
        }
    }, [history]);

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
            console.error(err);
        }
    };

    return (
        <div>
            <form>
                <label htmlFor="email">
                    Email:
                </label>
                <input
                    type="text"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmail}
                />
                <label htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    autoComplete="password"
                    value={password}
                    onChange={handlePassword}
                />
                <button type="submit" onClick={handleLogin}>
                    Log-In
                </button>
            </form>
        </div>
    );
}

export default Login;