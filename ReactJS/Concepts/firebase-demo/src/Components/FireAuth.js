import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

function FireAuth() {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        let unsub = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        // Removing the event listener on auth object
        return () => unsub();
    }, []);

    let createUser = async () => {
        let res = await auth.createUserWithEmailAndPassword(email, passwd);
        console.log(res);
    };

    let login = async () => {
        await auth.signInWithEmailAndPassword(email, passwd);
    };

    let logout = async () => {
        await auth.signOut();
    };

    return (
        <div className="form-container"> {/* Apply the CSS class */}
            {user === null ? (
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={passwd}
                        onChange={(e) => setPasswd(e.target.value)}
                    />

                    <button onClick={login}>Login</button>
                </div>
            ) : (
                <>
                    <h1>{user.email}</h1>
                    <button onClick={logout}>Logout</button>
                </>
            )}
        </div>
    );
}

export default FireAuth;
