const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../Database/models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  const userExists = await User.findOne({ username });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({ username, password, role });

  if (user) {
    res.status(201).json({ message: 'User registered successfully' });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ id: user._id, role: user.role }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
