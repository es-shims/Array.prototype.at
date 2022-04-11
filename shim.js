'use strict';

var define = require('define-properties');
var shimUnscopables = require('es-shim-unscopables');

var getPolyfill = require('./polyfill');

module.exports = function shimArrayPrototypeAt() {
	var polyfill = getPolyfill();

	define(
		Array.prototype,
		{ at: polyfill },
		{ at: function () { return Array.prototype.at !== polyfill; } }
	);

	shimUnscopables('at');

	return polyfill;
};
