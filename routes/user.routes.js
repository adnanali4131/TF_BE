const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = new express.Router();
require('dotenv').config();

// User Registration
router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    console.log({ user })
    await user.save();
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT);

    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

// User Login
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT);

    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});


module.exports = router;
