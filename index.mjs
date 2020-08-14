import callBind from 'es-abstract/helpers/callBind.js';
import RequireObjectCoercible from 'es-abstract/2020/RequireObjectCoercible.js';

import getPolyfill from 'array.prototype.item/polyfill';

const bound = callBind(getPolyfill());

export default function item(array, index) {
	RequireObjectCoercible(array);
	return bound(array, index);
}

export { default as getPolyfill } from 'array.prototype.item/polyfill';
export { default as implementation } from 'array.prototype.item/implementation';
export { default as shim } from 'array.prototype.item/shim';
