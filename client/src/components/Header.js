
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const executeScroll = () => {
    document.getElementById('outreach').scrollIntoView({ behavior: 'smooth' })
  }



  return (
    <header className="App-header row m-0">
      
        <div >
          <img src="/images/FirstImpression.jpg" alt="First Impression Marketing" className="App-logo" />
        </div>
        <div >
          <h1>First Impression </h1>
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
