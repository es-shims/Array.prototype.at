import shim from './shim.js';

export default shim;

export function then(resolve) {
	resolve(shim);
}
