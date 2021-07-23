
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const CustomError = require('library').CustomError;

exports.createError = function () {
  return new CustomError();
}