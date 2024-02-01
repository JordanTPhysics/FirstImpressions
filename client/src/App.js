import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FirstImpressions - AI powered digital marketing for your business</h1>

      </header>
      <main>
        <section>
          <p>Our pipelines provide you with fast and frequent coverage on your socials. </p>
          <h2>Let's find a plan for you</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic</h3>
              <p>£10/month</p>
              <ul>
                <li>Daily posts for 2 social media pages of your choice</li>
                <li>Guide to setup your unique automation scripts</li>
                <li>Email automation up to 50 clients</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Pro</h3>
              <p>£20/month</p>
              <ul>
                <li>Daily posts for 2 social media pages of your choice</li>
                <li>Guide to setup your unique automation scripts</li>
                <li>Email automation up to 500 clients</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Premium</h3>
              <p>Contact Sales</p>
              <ul>
                <li>Daily posts for Unlimited social media pages of your choice</li>
                <li>Custom automation pipelines</li>
                <li>Email automation up to 1000 clients</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;