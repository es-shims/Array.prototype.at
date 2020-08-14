'use strict';

var define = require('define-properties');
var RequireObjectCoercible = require('es-abstract/2020/RequireObjectCoercible');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var polyfill = getPolyfill();
var shim = require('./shim');

var boundItemShim = function item(array, index) {
	RequireObjectCoercible(array);
	return polyfill.call(array, index);
};
define(boundItemShim, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundItemShim;
