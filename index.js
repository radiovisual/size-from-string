'use strict';
var condense = require('no-whitespace');

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('size-from-string expected a string');
	}

	str = condense(str).toLowerCase();

	var sizes = str.split('x').map(function (num) {
		return parseFloat(Number(num), 10);
	});

	// square single values
	if (str.indexOf('x') === -1 && allNumbers(sizes)) {
		sizes.push(sizes[0]);
	}

	if (sizes.length !== 2 || !allNumbers(sizes)) {
		throw new Error('Invalid string format. Use "<number>x<number>" Ex: "100x100"');
	}

	return {width: sizes[0], height: sizes[1]};
};

function allNumbers(arr) {
	return arr.every(function (item) {
		return !isNaN(parseFloat(Number(item), 10));
	});
}
