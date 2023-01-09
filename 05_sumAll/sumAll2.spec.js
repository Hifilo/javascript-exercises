const sumAll2 = require('./sumAll2');

describe('sumAll2', () => {
	test('sums numbers within the range', () => {
		expect(sumAll2(1, 4)).toEqual(10);
	});
	test('works with large numbers', () => {
		expect(sumAll2(1, 4000)).toEqual(8002000);
	});
	test('works with larger number first', () => {
		expect(sumAll2(123, 1)).toEqual(7626);
	});
	test('returns ERROR with negative numbers', () => {
		expect(sumAll2(-10, 4)).toEqual('ERROR');
	});
	test('returns ERROR with non-number parameters', () => {
		expect(sumAll2(10, '90')).toEqual('ERROR');
	});
	test('returns ERROR with non-number parameters', () => {
		expect(sumAll2(10, [90, 1])).toEqual('ERROR');
	});
});
