"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isAddress = _interopRequireDefault(require("./lib/isAddress"));

var _isBoolean = _interopRequireDefault(require("./lib/isBoolean"));

var _isInt = _interopRequireDefault(require("./lib/isInt8"));

var _isUint = _interopRequireDefault(require("./lib/isUint8"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '0.0.1';
var validator = {
  version: version,
  isAddress: _isAddress.default,
  isBoolean: _isBoolean.default,
  isInt8: _isInt.default,
  isUint8: _isUint.default
};
var _default = validator;
exports.default = _default;
module.exports = exports.default;