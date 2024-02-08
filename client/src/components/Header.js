// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
    <h1>FirstImpressions - AI powered digital marketing for your business</h1>
    <ul className='links-list'>
      <li className='links'>
        <Link to={`login`} >Login</Link>
      </li>
      <li className='links'>
        <Link to={`dashboard`}>Dash</Link>
      </li>
      <li className='links'>
        <Link to={``}>Home</Link>
      </li>
    </ul>
  </header>
  );
};

export default Header;
