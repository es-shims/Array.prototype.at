import at from 'array.prototype.at';
import * as atModule from 'array.prototype.at';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	t.test('bad array/this value', (st) => {
		st.throws(() => at(undefined), TypeError, 'undefined is not an object');
		st.throws(() => at(null), TypeError, 'null is not an object');
		st.end();
	});

	runTests(at, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(atModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = atModule;
	t.equal((await import('array.prototype.at/shim')).default, shim, 'shim named export matches deep export');
	t.equal((await import('array.prototype.at/implementation')).default, implementation, 'implementation named export matches deep export');
	t.equal((await import('array.prototype.at/polyfill')).default, getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
