const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://adnanaliamanit:adnanali123$@cluster0.ew4axcx.mongodb.net/TF';
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = db;
