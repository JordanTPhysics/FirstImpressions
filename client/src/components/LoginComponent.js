import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import './formstyle.css';

const url = "http://127.0.0.1:5000";

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        axios.post(`${url}/login`, { username, password }, {withCredentials: true })
            .then((response) => {
                response.data.message === 'Login successful' && useAuth(response.data.token);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <main className='container m-0'>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </main>
    );
};

export default LoginComponent;
