const getMessage = require('./lib/getMessage');
const getRange = require('./lib/getRange');
const isAddress = require('./lib/isAddress');
const isBoolean = require('./lib/isBoolean');
const isInt = require('./lib/isInt');
const isUint = require('./lib/isUint');
const isValid = require('./lib/isValid');

const version = '0.1.1';
const validator = {
  version,
  isAddress,
  isBoolean,
  isInt8: (str) => isInt(str, 8),
  isUint8: (str) => isUint(str, 8),
  isValid,
  getRange,
  getMessage
};

module.exports = validator;