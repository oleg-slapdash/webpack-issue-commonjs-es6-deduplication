export class CustomError extends Error {
  source() {
    return 'index.es.js';
  }
}