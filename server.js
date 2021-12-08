const express = require('express');
const mongoose = require('mongoose');

// notates using express/ connects to port 3001
const app = express();
const PORT = process.env.PORT || 3001;


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// require /routes folder
app.use(require('./routes'));

// connects mongoose to DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Logging mongo queries being ran
mongoose.set('debug', true);

// console logs when the port goes live/ what port
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));