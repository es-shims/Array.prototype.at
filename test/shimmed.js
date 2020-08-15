'use strict';

require('../shim')();

var test = require('tape');
var defineProperties = require('define-properties');
var bind = require('function-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();
var hasStrictMode = require('has-strict-mode')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Array.prototype.item.length, 1, 'Array#item has a length of 1');
	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Array.prototype.item.name, 'item', 'Array#item has name "item"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Array.prototype, 'item'), 'Array#item is not enumerable');
		et.end();
	});

	t.test('bad array/this value', { skip: !hasStrictMode }, function (st) {
		st['throws'](function () { return Array.prototype.item.call(undefined, 'a'); }, TypeError, 'undefined is not an object');
		st['throws'](function () { return Array.prototype.item.call(null, 'a'); }, TypeError, 'null is not an object');
		st.end();
	});

	runTests(bind.call(Function.call, Array.prototype.item), t);

	t.end();
});
