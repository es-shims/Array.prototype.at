import implementation = require('./implementation');

/**
 * Installs `Array.prototype.at` on `Array.prototype` and returns the polyfill.
 */
declare function shimArrayPrototypeAt(): typeof implementation;

export = shimArrayPrototypeAt;
