import { CustomError } from 'library'
import { createError } from '3rd-party-project'

const localError = new CustomError();
const thirdPartyError = createError();

console.log('localError.source() === ', localError.source());
console.log('thirdPartyError.source() === ', thirdPartyError.source());
console.log('localError instanceof CustomError ===', localError instanceof CustomError ? 'true' : 'false');
console.log('thirdPartyError instanceof CustomError === ', thirdPartyError instanceof CustomError ? 'true' : 'false');

