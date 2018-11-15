import getRange from './lib/getRange';
import isAddress from './lib/isAddress';
import isBoolean from './lib/isBoolean';
import isInt8 from './lib/isInt8';
import isUint8 from './lib/isUint8';
import isValid from './lib/isValid';

const version = '0.0.8';
const validator = {
  version,
  isAddress,
  isBoolean,
  isInt8,
  isUint8,
  isValid,
  getRange
};

export default validator;