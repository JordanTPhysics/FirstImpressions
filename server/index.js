require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./api/authRoutes');
const testRoutes = require('./api/testRoutes');

mongoose.connect(process.env.MONGODB_URI, {
  ssl: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());
  app.use(cors("http://localhost:5000"));

  app.use('/api/auth', authRoutes);
  app.use('/api/test', testRoutes);


  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB disconnected through app termination');
      process.exit(0);
    });
  });





