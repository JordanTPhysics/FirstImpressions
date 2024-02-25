
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const router = express.Router();
const { getDb } = require('../config/db');

router.post('/register', async (req, res) => {

  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);

    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });

    // Save user to database
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error registering user', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({ message: 'Invalid password' });
    }
    const token = jwt.sign(
      { userId: user._id },
      process.env.APP_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({user, token });
  } catch (error) {
    res.status(500).send({ message: 'Error logging in', error: error.message });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('token').send({ message: 'Logged out' });
});

module.exports = router;

