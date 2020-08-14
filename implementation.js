'use strict';

var Get = require('es-abstract/2020/Get');
var LengthOfArrayLike = require('es-abstract/2020/LengthOfArrayLike');
var ToInteger = require('es-abstract/2020/ToInteger');
var ToObject = require('es-abstract/2020/ToObject');
var ToString = require('es-abstract/2020/ToString');

module.exports = function item(index) {
	var O = ToObject(this);

	var len = LengthOfArrayLike(O);

	var relativeIndex = ToInteger(index);

	var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;

	if (k < 0 || k >= len) {
		return void undefined;
	}

	return Get(O, ToString(k));
};
