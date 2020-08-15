'use strict';

var item = require('..');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](item.bind(null, undefined, function () {}), TypeError, 'undefined is not an object');
		st['throws'](item.bind(null, null, function () {}), TypeError, 'null is not an object');
		st.end();
	});

	runTests(item, t);

	t.end();
});
