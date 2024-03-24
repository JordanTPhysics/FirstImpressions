import React, { useState } from 'react';
import './App.css';
import './components/formstyle.css';
import StyleBox from './components/StyleBox';
const Landing = () => {

  return (
    <main >
      <section className='row m-0 user-box'>
        <h2>Marketing is important...</h2><br />
        <h3>...but there are already 101 things on your to-do list.
          And they are all important too!</h3>
        <br />
        <br />
        <h2 className='bold' >So How Can I Optimize
          My Marketing?
        </h2>
      </section>
      <section className='row'>
        <div className="pricing-grid">
          <div className='col-md-4 pricing-card'>
            <h3>HANDLE EVERYTHING YOURSELF?</h3>
            <h4>That's fine if you have very little on your plate. But if you're pretty swamped already... this isn't a viable option.</h4>
          </div>
          <div className='col-md-4 pricing-card'>
            <h3>AGENCY HIRE?</h3>
            <h4>Unless you've got enough money and patience to get good service from them, you'll probably be managed by the intern of the assistants' assistant.
            Not exactly optimal.</h4>
          </div>
          <div className='col-md-4 pricing-card'>
            <h3>NEW STAFF?</h3>
           <h4> Finding good people isn't easy.
            Training and onboarding staff is costly.
            And even if you do find the perfect man or woman for the position... you're still depending on one person!</h4>
          </div>
        </div>
      </section>

      <div className='row'>
        <h1>"OK... So What Makes
          You So Different?"</h1>
        <div className='col-6'>
        <StyleBox title={"NO RISK"} text={"We only win if you win. That's the basis for a good partnership. You won't carry all the risk, we'll share it."}/>
        </div>
        <div className='col-6 '>
          <StyleBox title={"RESULTS"} text={"Our first priority is to get you results. Less talk, more walk."}/>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 '>
          <StyleBox title={"LOCAL"} text={"We're not tucked away in some anonymous call center. We're a local company, so you'll be able to reach us when you need us."}/>
        </div>
        <div className='col-6 '>
          <StyleBox title={"SPECIALIZED"} text={"Jack of all trades... master of none. Specialization works. That's why we work with industries we know, so we can guarantee results."}/>
        </div>
      </div>
      <section className='row'>

        <h2>Let's find a plan for you</h2>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p>£10/month</p>
            <ul>
              <li><h4>Daily posts for 2 social media pages of your choice</h4></li>
              <li><h4>Guide to setup your unique automation scripts</h4></li>
              <li><h4>Email automation up to 50 clients</h4></li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Pro</h3>
            <p>£20/month</p>
            <ul>
              <li><h4>Daily posts for 4 social media pages of your choice</h4></li>
              <li><h4>Guide to setup your unique automation scripts</h4></li>
              <li><h4>Email automation up to 500 clients</h4></li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Premium</h3>
            <p>Contact Sales</p>
            <ul>
              <li><h4>Daily posts for Unlimited social media pages of your choice</h4></li>
              <li><h4>Custom automation pipelines</h4></li>
              <li><h4>Email automation up to 1000 clients</h4></li>
            </ul>
          </div>
        </div>
      </section>
    </main>

  );
}

export default Landing;