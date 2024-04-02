
import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {



  const executeScroll = () => {
    document.getElementById('outreach').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="App-header row m-0">

      <div >
        <img src="/images/FirstImpression.png" alt="First Impression Marketing" className="App-logo" />
      </div>
      <div >
        <h1 className='title'>        
  First Impression Marketing
           </h1>
        <h2 className='str'>Scalable Marketing Solutions </h2>
        <button className='App-btn' onClick={executeScroll}>Yes Please!</button>
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
