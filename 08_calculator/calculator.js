// 1st attempt Trying various iterative methods, and hard coding args & Arrays. Perhaps a little over-engineered

const add = function (...args) {
	let result = 0;
	args.forEach((item) => {
		result += parseFloat(item);
	});
	return result;
};

const subtract = function (...args) {
	let result = args[0];
	for (let i = 1; i < args.length; i++) {
		result -= parseFloat(args[i]);
	}
	return result;
};

const sum = (...args) => {
	let result;

	console.log(args.length);
	if (args.length === 0) {
		return (result = 0);
	}
	for (let i = 0; i < args.length; i++) {
		if (args[i] == '' || args[i] == undefined) {
			return (result = 0);
		}
		args.forEach((item) => {
			result = item.reduce((previous, current) => previous + current);
		});
		console.log(result);
	}
	return parseFloat(result);
};

const multiply = function (...args) {
	let result = 1;
	args.forEach((item) => {
		result = item.reduce((a, b) => a * b);
	});
	return result;
};

multiply([2, 4]);
const power = function (...args) {
	args = args.flat();
	let base = args[0];
	let power = args[1];
	base;
	power;

	args;
	let result = 1;
	for (let i = 0; i < power; i++) {
		result *= base;
		result;
	}
	result;
	return parseFloat(result);
};
power(4, 3);

const factorial = function (...args) {
	args = args.flat();
	let result = 1;
	args;
	let multiplier = [];
	if (args === 1 || args === 0 || args === undefined) return result;
	for (let i = 1; i <= args; i++) {
		multiplier.push(i);
	}
	for (let i = multiplier.length; i > 1; i--) {
		result *= i;
		console.log(result);
	}

	console.log(result);

	return result;
};

console.log(factorial(6));
// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
