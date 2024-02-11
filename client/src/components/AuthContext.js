import React, { createContext, useContext, useState } from 'react';

const server = "http://localhost:8000";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const value = { user, setUser, loggedIn, setLoggedIn, login, logout};

  const login = async (e, username, password) => {
    e.preventDefault();
    try {
      const response = await fetch(`${server}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setLoggedIn(true);
      } else {
        throw new Error('Authentication failed');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      throw error;
    }
  };

  const logout = () => {
    e.preventDefault();
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
