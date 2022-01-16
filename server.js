/* eslint-disable linebreak-style */
const CONFIG = require('config');
const express = require('express');

const app = express();
// const rsf = require('file-stream-rotator');

const {
  MONGO_DOMAIN,
  MONGO_PORT,
  MONGO_DB,
  PORT,
} = CONFIG;

// connect DB
const mongoose = require('mongoose');

const connectTo = `mongodb://${MONGO_DOMAIN}:${MONGO_PORT}/${MONGO_DB}`;

mongoose
  .connect(connectTo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // user: process.env.MONGO_USER,
    // pass: process.env.MONGO_PASSWORD,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

const bodyParser = require('body-parser');

// parse requests of content-type - application/json
app.use(bodyParser.json());

const cors = require('cors');

app.use(cors());

app.use(express.static('public'));

// simple route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to exam simulator application.',
  });
});

require('./app/routes/routes')(app);

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
