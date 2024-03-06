const express = require('express');

const User = require('../models/userModel');
const router = express.Router();

router.get('/users', async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error retrieving users' });
    }
  });

module.exports = router;