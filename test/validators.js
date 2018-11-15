import {
  format
} from 'util';

import assert from 'assert';
import validator from '../index';

function test(options) {
  let args = options.args || [];
  args.unshift(null);
  if (options.valid) {
    options.valid.forEach((valid) => {
      args[0] = valid;
      if (validator[options.validator](...args) !== true) {
        let warning = format(
          'validator.%s(%s) failed but should have passed',
          options.validator, args.join(', ')
        );
        throw new Error(warning);
      }
    });
  }
  if (options.invalid) {
    options.invalid.forEach((invalid) => {
      args[0] = invalid;
      if (validator[options.validator](...args) !== false) {
        let warning = format(
          'validator.%s(%s) passed but should have failed',
          options.validator, args.join(', ')
        );
        throw new Error(warning);
      }
    });
  }
}

describe('Validators', () => {

  it('get type range', () => {
    assert(validator.getRange('int8').MIN == -128);
    assert(validator.getRange('int8').MAX == 127);
    assert(validator.getRange('uint8').MIN == 0);
    assert(validator.getRange('uint8').MAX == 255);
    assert(validator.getRange('uint16').MAX == 65535);
    assert(validator.getRange('uint24').MAX == 16777215);
    assert(validator.getRange('uint32').MAX == 4294967295);
    assert(validator.getRange('uint40').MAX == 1099511627775);
    assert(validator.getRange('uint256').MAX == 1.157920892373162e+77);
  });

  it('should check input value', () => {
    assert(validator.isValid('bool', 'true'));
    assert(validator.isValid('uint8', '255'));
    assert(validator.isValid('address', '0xa77451687Ee77cB3DFf16A24446C54DB76C80222'));
    assert.equal(validator.isValid('address', 'oooooxxxx'), false);
  });

  it('should validate address type', () => {
    test({
      validator: 'isAddress',
      valid: [
        '0xa77451687Ee77cB3DFf16A24446C54DB76C80222'
      ],
      invalid: [
        '0xa77451687Ee77cB3DFf16A24446C54DB76C80221',
        '0xa77451687Ee77cB3DFf16A24446C54DB76C80223',
        '0xa77451687Ee77cB3DFf16A24446C54DB76C80224',
        '0xa77451687Ee77cB3DFf16A24446C54DB76C80225',
        '0xa77451687Ee77cB3DFf16A24446C54DB76C80226'
      ],
    });
  });

  it('should validate boolean type', () => {
    test({
      validator: 'isBoolean',
      valid: [
        'true',
        'false'
      ],
      invalid: [
        '1',
        '0',
        '1.0',
        '0.0',
        'true ',
        'False',
        'True',
        'yes',
      ],
    });
  });

  it('should validate int8 type', () => {
    test({
      validator: 'isInt8',
      valid: [
        '-128',
        '0',
        '127'
      ],
      invalid: [
        '-129',
        '128',
        '0.1',
        'true'
      ],
    });
  });

  it('should validate uint8 type', () => {
    test({
      validator: 'isUint8',
      valid: [
        '0',
        '7',
        '255'
      ],
      invalid: [
        '-1',
        '256',
        '1000',
        '0.1',
        'true'
      ],
    });
  });

});