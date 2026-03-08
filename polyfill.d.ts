import implementation = require('./implementation');

/**
 * Returns the native `Array.prototype.at` if compliant, or the implementation.
 */
declare function getPolyfill(): typeof implementation;

export = getPolyfill;
