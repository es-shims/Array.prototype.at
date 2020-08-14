'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayPrototypeItem() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ item: polyfill },
		{ item: function () { return Array.prototype.item !== polyfill; } }
	);
	return polyfill;
};
