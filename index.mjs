import callBind from 'call-bind';
import RequireObjectCoercible from 'es-abstract/2021/RequireObjectCoercible.js';

import getPolyfill from 'array.prototype.at/polyfill';

const bound = callBind(getPolyfill());

export default function at(array, index) {
	RequireObjectCoercible(array);
	return bound(array, index);
}

export { default as getPolyfill } from 'array.prototype.at/polyfill';
export { default as implementation } from 'array.prototype.at/implementation';
export { default as shim } from 'array.prototype.at/shim';
