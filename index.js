'use strict';

const express = require('express');
const generateKey = require('./generateKey');
const url = require('./models/url');
const configs = require('./config');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const port = 4200 || process.ENV.PORT;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views');
app.use(express.static('public'));
app.use(bodyparser.json());
mongoose.connect(`mongodb://${configs.db_username}:${configs.db_password}@ds151024.mlab.com:51024/urls`);

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/shortenURL', (req, res) => {
  let newURL = new url();
  let uniqueKey = generateKey();
  newURL.longURL = req.body.longURL;
  newURL.uniqueID = uniqueKey;
  newURL.shortURL = `localhost:4200/${uniqueKey}`;
  newURL.save((err, url) => {
    if (err) return handleError(err);
    res.send(url.shortURL);
  });
});

app.get('/:key', (req, res)=> {
  url.findOne({ uniqueID: req.params.key }, (err, record)=> {
    res.redirect(record.longURL);
  });
});

app.listen(port, ()=> {
  console.log('Server is running on port: ', port);
});
