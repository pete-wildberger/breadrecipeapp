// requires
require('dotenv').config();
const express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  axios = require('axios'),
  querystring = require('querystring');

// port
const port = process.env.PORT || 3000;

// uses
app.use(express.static('client/build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// base url get
app.get('/', (req, res) => {
  console.log('base url hit');
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log('up 3000');
});
