'use strict';

const express = require('express');
const generateKey = require('./generateKey');
const url = require('./models/url');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const port = 4200 || process.ENV.PORT;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views');
app.use(express.static('public'));
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/shortenURL', (req, res) => {
  let newURL = new url();
  let uniqueKey = generateKey();
  newURL.longURL = req.body.longURL;
  newURL.unique = uniqueKey;
  newURL.shortURL = `localhost:4200/${uniqueKey}`;
  console.log(newURL);
  res.send(newURL.shortURL);
});

app.listen(port, ()=> {
  console.log('Server is running on port: ', port);
});
