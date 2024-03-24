
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  linkedInToken: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
