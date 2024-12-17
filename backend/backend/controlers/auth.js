// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const router = express.Router();

// Sign-Up Route
const sig_up = async (req, res) => {
  const { name, campus, rollNumber, branch, bloodGroup, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ name, campus, rollNumber, branch, bloodGroup, email, password });

    await user.save();
    res.status(200).json({ msg: 'Sign-Up successful!' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Login Route
const log_in = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }


    if (!(email == user.email && password == user.password)) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }
    else{
    return res.status(200).json({ msg: 'Login successful!', user });
  }
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.sig_up =sig_up;
exports.log_in = log_in;
// module.exports = router;
