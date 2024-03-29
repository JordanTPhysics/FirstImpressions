require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./api/authRoutes');
const testRoutes = require('./api/testRoutes');
const liRoutes = require('./api/liRoutes');
const missedCall = require('./api/missedCall');

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
app.use(cors("https://firstimpressionlinux.azurewebsites.net"));


app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);
app.use('/api/auth/linkedin', liRoutes);
app.use('/api/incoming', missedCall);

app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
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





