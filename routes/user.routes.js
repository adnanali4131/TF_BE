const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = require('./router');


// User Registration
router.post('/users', async (req, res) => {
  try {
    // Check if email is already registered
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).send({ error: 'Email already registered' });
    }

    // If email not registered, create new user
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT);

    res.status(201).send({ user, token });
  } catch (e) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
});


// User Login
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT);

    res.send({ user, token });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
