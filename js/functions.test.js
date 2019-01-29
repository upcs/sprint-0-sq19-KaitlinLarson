const functions = require('./functions');

test('adds 7 + -8 to equal -1', () => {
	expect(functions.add(7, -8)).toBe(-1);
});

test('adds 23 + 22 to equal 45', () => {
	expect(functions.add(23, 22)).toBe(45);
});

test('add -1 + -2 to equal 3', () => {
	expect(functions.add(-1,-2)).toBe(3);
});
