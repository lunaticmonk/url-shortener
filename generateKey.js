'use strict';

const crypto = require('crypto');

let generateKey = ()=> {
  return crypto.randomBytes(4).toString('hex');
}

module.exports = generateKey;
