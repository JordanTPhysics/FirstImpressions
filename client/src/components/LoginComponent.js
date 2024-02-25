import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import './formstyle.css';

const LoginComponent = () => {

    const { user, login, logout } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newUser, setNewUser] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();
        await login(username, password);

        setUsername('');
        setPassword('');
        Navigate('/dashboard');
    };

    const handleRegister = () => {
        axios.post(`${url}/auth/register`, {
            username: newUser,
            password: newPassword,
            email: newEmail
        }, {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                response.data.message === 'User registered successfully';
                setNewEmail('');
                setNewUser('');
                setNewPassword('');

                setUsername(newUser);
                setPassword(newPassword);

                handleLogin();
            })
            .catch((error) => {
                console.error(error);
            });

    }

    const handleLogout = async (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <main className='row user-box'>
            {!user ?
                <div>
                    <form>
                        <h2>Login</h2>
                        <div>
                            <label>Username:</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="button" onClick={handleLogin}>Login</button>
                    </form>

                    <form>
                        <h2>Register</h2>
                        <div>
                            <label>Username:</label>
                            <input type="text" value={newUser} onChange={(e) => setNewUser(e.target.value)} />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                        </div>
                        <button type="button" onClick={handleRegister}>Register</button>
                    </form>
                </div> : <div>
                    <h3>You are Logged In, head to the dashboard or Log Out below</h3>
                    <Link to={`dashboard`}><div className='App-btn'>Dashboard</div></Link>

                    <button onClick={handleLogout}>Log Out</button>
                </div>}
        </main>
    );
};

export default LoginComponent;
