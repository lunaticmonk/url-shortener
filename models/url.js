'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let urlSchema = new Schema({
  longURL  : String,
  shortURL : String,
  uniqueID : String,
  clicks   : { type: Number, default: 0 }
});

let newURLSchema = mongoose.model('url', urlSchema);
module.exports = newURLSchema;
