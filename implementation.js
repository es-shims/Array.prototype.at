'use strict';

var Get = require('es-abstract/2023/Get');
var LengthOfArrayLike = require('es-abstract/2023/LengthOfArrayLike');
var ToIntegerOrInfinity = require('es-abstract/2023/ToIntegerOrInfinity');
var ToObject = require('es-object-atoms/ToObject');
var ToString = require('es-abstract/2023/ToString');

module.exports = function at(index) {
	var O = ToObject(this);

	var len = LengthOfArrayLike(O);

	var relativeIndex = ToIntegerOrInfinity(index);

	var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;

	if (k < 0 || k >= len) {
		return void undefined;
	}

	return Get(O, ToString(k));
};
