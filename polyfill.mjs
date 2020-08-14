import polyfill from './polyfill.js';

export default polyfill;

export function then(resolve) {
	resolve(polyfill);
}
