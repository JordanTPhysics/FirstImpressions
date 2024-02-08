import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './components/formstyle.css';
import { FacebookProvider, Like, LoginButton } from 'react-facebook';
const Landing = () => {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (


      <main className='container m-0'>
        <section className='row'>
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
        <section className='row'>
        <FacebookProvider appId="{655489229927403}">
        <LoginButton scope="email" onCompleted={console.log} onError={console.error}/>
        <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
      </FacebookProvider>
      </section>
        <section className='form row'>
          <form>
            <span>Enquire below to receive your free AI Marketing InfoDoc</span>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" id="company" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="message">Comments / Questions</label>
              <textarea name="message" id="message" required onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
      </main>

  );
}

export default Landing;