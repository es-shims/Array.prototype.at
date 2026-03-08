import implementation = require('./implementation');
import shim = require('./shim');
import getPolyfill = require('./polyfill');

/**
 * Returns the element at the given index in the array-like object.
 *
 * @param array - The array-like object to get the element from.
 * @param index - The integer index. Negative integers count back from the last element.
 * @returns The element at the given index, or `undefined` if the index is out of range.
 */
declare function at<T>(array: ArrayLike<T>, index: number): T | undefined;

declare namespace at {
	export { implementation, shim, getPolyfill };
}

export = at;
