import test from 'ava';
import fn from './';

test('expects a string', t => {
	t.throws(() => {
		fn({});
	}, 'size-from-string expected a string');
});

test('throws with improper format (no "x")', t => {
	t.throws(() => {
		fn('1000 by 2000');
	}, 'Invalid string format. Use "<number>x<number>" Ex: "100x100"');
});

test('throws with improper format (missing numbers)', t => {
	t.throws(() => {
		fn('hundred x thousand');
	}, 'Invalid string format. Use "<number>x<number>" Ex: "100x100"');
});

test('returns a size object', t => {
	const obj = fn('100x200');
	t.is(typeof obj, 'object');
	t.is(obj.width, 100);
	t.is(obj.height, 200);
});

test('ignores spaces', t => {
	const obj = fn('   1280  x   720       ');
	t.is(obj.width, 1280);
	t.is(obj.height, 720);
});

test('number properties', t => {
	const obj = fn('500x700');
	t.is(typeof obj.width, 'number');
	t.is(typeof obj.height, 'number');
});

test('squares single values', t => {
	const obj = fn('99');
	t.is(obj.width, 99);
	t.is(obj.height, 99);
});

test('negative numbers', t => {
	const obj = fn('-205x-505');
	t.is(obj.width, -205.0);
	t.is(obj.height, -505.0);
});

test('floats', t => {
	const obj = fn('205.01x505.02');
	t.is(obj.width, 205.01);
	t.is(obj.height, 505.02);
});
