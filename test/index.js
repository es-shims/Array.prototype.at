'use strict';

var at = require('..');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	t.test('bad array/this value', function (st) {
		st['throws'](at.bind(null, undefined, function () {}), TypeError, 'undefined is not an object');
		st['throws'](at.bind(null, null, function () {}), TypeError, 'null is not an object');
		st.end();
	});

	runTests(at, t);

	t.end();
});
