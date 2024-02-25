// DashboardComponent.js
import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { Link, redirect, useLocation } from 'react-router-dom';
import { FacebookProvider, LoginButton, useFacebook } from 'react-facebook';
import { InstagramLogin } from '@amraneze/react-instagram-login';


const DashboardComponent = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const responseInstagram = (response) => {
    console.log(response);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    const state = queryParams.get('state');

    if (code && state === "ksdughseoidg") {
      
      fetch("http://localhost:3000/auth/linkedin/callback", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
    }
  }, [location]);

  const linkedInLogin = () => {
    window.location.href = 'http://localhost:3000/auth/linkedin';
  };
  return (<>
    {user ? <> <div className='row'>
      <h2>Welcome, {user.username}!</h2>
    </div>

      <div className='row' >
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <h2>Connect your socials</h2>
          <ul className='links-list'>
            <li className='links'>
              <FacebookProvider appId="{1312877263439256}" >
                <LoginButton scope="email" onCompleted={console.log} onError={console.error} className="facebooklogin" />
              </FacebookProvider>
            </li>
            <li className='links'>
              <InstagramLogin
                clientId="CLIENT_ID"
                buttonText="Login"
                onSuccess={responseInstagram}
                onFailure={responseInstagram}
              />
            </li>
            <li className='links'>
              <button className='' onClick={linkedInLogin}>LinkedIn</button>
            </li>
            <li className='links'>
            </li>
          </ul>
        </div>
        <div className='col-md-4'></div>


      </div>
      <div className='row'>
        <div className='col-md-4'></div>

        <div className='col-md-4'>
          <button className='App-btn' onClick={logout}>Logout</button>

        </div>
        <div className='col-md-4'></div>

      </div> </>
      : <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <h2>You need to login to access the dashboard:</h2>
          <Link to={`login`} /><div className='App-btn'>Login</div>
          
        </div>
        <div className='col-md-4'></div>

      </div>}
  </>
  );
};

export default DashboardComponent;
