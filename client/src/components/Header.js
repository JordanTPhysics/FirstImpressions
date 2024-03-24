
import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  const [highlightedLetter, setHighlightedLetter] = useState(null);

  const handleMouseEnter = (index) => {
    setHighlightedLetter(index);
  };

  const handleMouseLeave = () => {
    setHighlightedLetter(null);
  };

  const executeScroll = () => {
    document.getElementById('outreach').scrollIntoView({ behavior: 'smooth' })
  }
  const title = 'First Impression Marketing';

  return (
    <header className="App-header row m-0">

      <div >
        <img src="/images/FirstImpression.png" alt="First Impression Marketing" className="App-logo" />
      </div>
      <div >
        <h1>        
          {title.split('').map((letter, index) => (
          <span
            key={index}
            className={index === highlightedLetter ? 'txt-highlight' : ''}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>
            {letter}
          </span>
        ))} </h1>
        <h2>Scalable Marketing Solutions </h2>
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
