const express = require('express');
const bcrypt = require('bcrypt');
const Teacher = require('../models/teacher'); 
const routes = express.Router();

// Signup Route
routes.post('/signup', async (req, res) => {
  try {
    const { empolyid, username, email, password } = req.body;

    if (!empolyid || !username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await Teacher.findOne({ empolyid });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const teacher = new Teacher({ empolyid, username, email, password: hashedPassword });

    await teacher.save();

    return res.status(201).json({ message: 'Teacher account created successfully' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Login Route
routes.post('/login', async (req, res) => {
  try {
    const { empolyid, password } = req.body;

    if (!empolyid || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await Teacher.findOne({ empolyid });

    if (!user) {
      return res.status(401).json({ message: 'Invalid Id' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    return res.status(200).json({ message: 'Login successfully' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = routes;
