// DashboardComponent.js
import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { FacebookProvider, Like, LoginButton } from 'react-facebook';

const DashboardComponent = () => {
  const { user, logout } = useAuth();

  return (
    <main className='container m-0'>
      <h2>Welcome, {user ? user.username : 'Guest'}!</h2>
      <button onClick={logout}>Logout</button>

      <FacebookProvider appId="{655489229927403}">
        <LoginButton scope="email" onCompleted={console.log} onError={console.error}/>
        <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
      </FacebookProvider></main>
  );
};

export default DashboardComponent;
