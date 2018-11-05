import isAddress from './lib/isAddress';
import isBoolean from './lib/isBoolean';
import isInt8 from './lib/isInt8';
import isUint8 from './lib/isUint8';

const version = '0.0.2';
const validator = {
  version,
  isAddress,
  isBoolean,
  isInt8,
  isUint8
};

export default validator;