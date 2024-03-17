import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

//const baseUrl = process.env.PRODUCTION_URL || process.env.DEV_URL;
const baseUrl = "http://localhost:3000/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const response = await axios.post(`${baseUrl}/auth/login`,
      { username, password },
      { withCredentials: true, headers: { 'Content-Type': 'application/json' } });

      if (response.status !== 200) {
        console.log('Error logging in', response.data.message);
        return;
      }

    setUser(response.data.user);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('token', response.data.token);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>

};

