import React from "react";

const Pricing = () => {

    return (
        <section className='row'>

        <h2 className='str'>Let's find a plan for you</h2>
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
    );}