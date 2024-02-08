// DashboardComponent.js
import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

const DashboardComponent = () => {
  const { user, logout } = useAuth();

  return (
    <main className='container m-0'>
      <h2>Welcome, {user ? user.username : 'Guest'}!</h2>
      <button onClick={logout}>Logout</button>
    </main>
  );
};

export default DashboardComponent;
