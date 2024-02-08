// DashboardComponent.js
import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { FacebookProvider, LoginButton, useFacebook } from 'react-facebook';
import { InstagramLogin } from '@amraneze/react-instagram-login';

const DashboardComponent = () => {
  const { user, logout } = useAuth();

  const responseInstagram = (response) => {
    console.log(response);
  };


    useEffect(() => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: '{655489229927403}',
          cookie: true,
          xfbml: true,
          version: '{v19.0}'
        });
        window.FB.AppEvents.logPageView();
      };
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    }, []);

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
