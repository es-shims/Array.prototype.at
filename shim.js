'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayPrototypeAt() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ at: polyfill },
		{ at: function () { return Array.prototype.at !== polyfill; } }
	);
	return polyfill;
};
