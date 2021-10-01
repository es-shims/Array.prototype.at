'use strict';

var callBind = require('call-bind');
var define = require('define-properties');
var RequireObjectCoercible = require('es-abstract/2021/RequireObjectCoercible');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var polyfill = callBind(getPolyfill());
var shim = require('./shim');

var boundShim = function at(array, index) {
	RequireObjectCoercible(array);
	return polyfill(array, index);
};
define(boundShim, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundShim;
