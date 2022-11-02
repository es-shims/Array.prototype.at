'use strict';

var Get = require('es-abstract/2022/Get');
var LengthOfArrayLike = require('es-abstract/2022/LengthOfArrayLike');
var ToIntegerOrInfinity = require('es-abstract/2022/ToIntegerOrInfinity');
var ToObject = require('es-abstract/2022/ToObject');
var ToString = require('es-abstract/2022/ToString');

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
