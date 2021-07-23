'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class CustomError extends Error {
  source() {
    return 'index.cjs';
  }
}

exports.CustomError = CustomError