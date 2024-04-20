
import React, { useState } from "react";
import $ from 'jquery';
import './formstyle.css';
const emailjs = require('emailjs-com');

const options = {
  serviceID: 'service_iryb57a',
  templateID: 'template_vjk0znj',
  publicKey: '3oQOYQi8O2nwB1qNI'
};

const Footer = () => {

  const [formData, setFormData] = useState({});
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(options.serviceID, options.templateID, formData, options.publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleFocus = (e) => {
    const $target = $(e.target); 
    const $siblings = $target.siblings();
    
    $siblings.addClass('focused');

    for (const [key, value] of Object.entries(formData)) {
        if (value === '') {
            $(`label[for="${key}"]`).removeClass('focused');
        }
    }
}
  return (

    <footer id="outreach" className="App-footer row">
    <form>
    <h2 className="str">Interested in boosting your business? Get in touch Now!</h2>

    <div className="form-group">
      <label htmlFor="name" id="nameLabel">Name</label>
      <input type="text" name="name" id="name" required onChange={handleChange} onFocus={handleFocus}/>
    </div>

    <div className="form-group">
      <label htmlFor="email" id="nameLabel">Email</label>
      <input type="email" name="email" id="email" required onChange={handleChange} onFocus={handleFocus}/>
    </div>

    <div className="form-group">
      <label htmlFor="phone" id="nameLabel">Phone</label>
      <input type="tel" name="phone" id="phone" onChange={handleChange} onFocus={handleFocus}/>
    </div>

    <div className="form-group">
      <label htmlFor="company" id="nameLabel">Company</label>
      <input type="text" name="company" id="company" onChange={handleChange} onFocus={handleFocus}/>
    </div>

    <div className="form-group">
      <label htmlFor="message" id="nameLabel">Your Biggest Question:</label>
      <textarea name="message" id="message" required onChange={handleChange} onFocus={handleFocus}></textarea>
    </div>

    <button type="submit" className="App-btn" onClick={handleSubmit}>Submit</button>
  </form>
  </footer>
  );
}

export default Footer;