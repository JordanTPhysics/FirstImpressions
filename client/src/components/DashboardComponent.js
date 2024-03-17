import React, { useEffect } from 'react';
import { useAuth } from './AuthContext';
import { Link, Navigate, useLocation } from 'react-router-dom';

const baseUrl = process.env.PRODUCTION_URL || "http://localhost:3000/api";  
const DashboardComponent = () => {
  const { user, logout } = useAuth();

  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    const state = queryParams.get('state');

    if (code && state === "ksdughseoidg") {
      
      fetch(`${baseUrl}/auth/linkedin/callback`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
    }
  }, [location]);

  const linkedInLogin = () => {
    window.location.href = `${baseUrl}/auth/linkedin`;
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

            </li>
            <li className='links'>

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
          <Navigate to={`/`} /><div className='App-btn'>Login</div>
          
        </div>
        <div className='col-md-4'></div>

      </div>}
  </>
  );
};

export default DashboardComponent;
