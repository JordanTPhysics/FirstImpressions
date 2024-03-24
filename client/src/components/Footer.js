
import React, { useState } from "react";

const Footer = () => {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (

    <footer id="outreach" className="App-footer row">
    <form>
    <h2 >Interested in boosting your business? Get in touch Now!</h2>

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
      <input type="text" name="company" id="company" onChange={handleChange} />
    </div>

    <div className="form-group">
      <label htmlFor="message">Your Biggest Question:</label>
      <textarea name="message" id="message" required onChange={handleChange}></textarea>
    </div>

    <button type="submit" className="App-btn">Submit</button>
  </form>
  </footer>
  );
}

export default Footer;