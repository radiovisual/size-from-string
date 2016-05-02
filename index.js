'use strict';
var condense = require('selective-whitespace');

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('size-from-string expected a string');
	}

	str = condense(str, {stripAll: true}).toLowerCase();

	var sizes = str.split('x').map(function (num) {
		return parseInt(num, 10);
	});

	if (sizes.length !== 2 || !allNumbers(sizes)) {
		throw new Error('Invalid string format. Use "<number>x<number>" Ex: "100x100"');
	}

	return {width: sizes[0], height: sizes[1]};
};

function allNumbers(arr) {
	return arr.every(function (item) {
		return !isNaN(parseInt(item, 10));
	});
}
