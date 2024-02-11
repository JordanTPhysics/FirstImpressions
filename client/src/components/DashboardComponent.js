// DashboardComponent.js
import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { FacebookProvider, LoginButton, useFacebook } from 'react-facebook';
import { InstagramLogin } from '@amraneze/react-instagram-login';



const DashboardComponent = () => {
  const { user, setUser, loggedIn, setLoggedIn, login, logout } = useAuth();

  const responseInstagram = (response) => {
    console.log(response);
  };

   const handleLinkedIn = () => {
    const url = "https://www.linkedin.com/oauth/v2/accessToken";
    var client_secret = process.env.LI_CLIENT_SECRET;
    console.log(client_secret);
    const payload = new URLSearchParams();
    payload.append("grant_type", "authorization_code");
    payload.append("code", authorization_code);
    payload.append("client_id", '77bu6g53xc31x8');
    payload.append("client_secret", client_secret);
    payload.append("redirect_uri", 'https://bucolic-swan-3ec39d.netlify.app/');

     fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: payload
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }


  return (
    <main className='container m-0'>
      <div className='row'><h2>Welcome, {user ? user.username : 'Guest'}!</h2>
        <button onClick={logout}>Logout</button></div>

      <div className='row' >
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
            <button onClick={handleLinkedIn}>Login with LinkedIn</button>
          </li>
          <li className='links'>
          </li>
        </ul>

      </div>
    </main>
  );
};

export default DashboardComponent;
