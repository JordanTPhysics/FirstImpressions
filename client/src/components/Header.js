
import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  const executeScroll = () => {
    document.getElementById('outreach').scrollIntoView({ behavior: 'smooth' })
  }
  const location = useLocation();
  const baseUrl = process.env.PRODUCTION_URL || "http://localhost:3000/api";
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    const state = queryParams.get('state');

    if (code) {
      
      fetch(`${baseUrl}/auth/linkedin/callback`, {
        method: "POST",
        headers: {
          'Content-Type': 'x-www-form-urlencoded',
        },
        body: JSON.stringify({ code }),
      });
    }
  }, [location]);

  const linkedInLogin = () => {
    window.location.href = `${baseUrl}/auth/linkedin`;
    console.log(window.location.href);
    console.log(location, location.pathname);
  };

  return (
    <header className="App-header row m-0">
      
        <div >
          <img src="/images/FirstImpression.jpg" alt="First Impression Marketing" className="App-logo" />
        </div>
        <div >
          <h1>First Impression </h1>
          <h2>Scalable Marketing Solutions </h2>
          <button className='App-btn' onClick={executeScroll}>Yes Please!</button>
          <button className='' onClick={linkedInLogin}>LinkedIn</button>
        </div>


      <div >
        <ul className='links-list'>
          <li className='links'>
            <Link to={`login`} ><div className='App-btn'>Login</div>  </Link>
          </li>
          <li className='links'>
            <Link to={`dashboard`}><div className='App-btn'>Dash</div></Link>
          </li>
          <li className='links'>
            <Link to={``}><div className='App-btn'>Home</div></Link>
          </li>
          <li className='links'>
            <Link to={`Privacy`}><div className='App-btn'>Privacy</div></Link>
          </li>
        </ul>
      <h2>More Growth. More Clients. Guaranteed.</h2>

      </div>
    </header>
  );
};

export default Header;
