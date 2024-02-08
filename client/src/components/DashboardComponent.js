// DashboardComponent.js
import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { FacebookProvider, LoginButton, useFacebook } from 'react-facebook';
import { InstagramLogin } from '@amraneze/react-instagram-login';

const DashboardComponent = () => {
  const { user, logout } = useAuth();

  const responseInstagram = (response) => {
    console.log(response);
  };


  return (
    <main className='container m-0'>
      <div className='row'><h2>Welcome, {user ? user.username : 'Guest'}!</h2>
        <button onClick={logout}>Logout</button></div>

      <div className='row' >
        <div className='col-md-6'>

          <FacebookProvider appId="{655489229927403}" >
            <LoginButton scope="email" onCompleted={console.log} onError={console.error} className="facebooklogin"/>
          </FacebookProvider>
        </div>
        <div className='col-md-6'>
          <InstagramLogin
            clientId="CLIENT_ID"
            buttonText="Login"
            onSuccess={responseInstagram}
            onFailure={responseInstagram}
          />
        </div>
      </div>
    </main>
  );
};

export default DashboardComponent;
