const add = function (...args) {
	let result = args[0];
	args.forEach((item) => {
		result += item;
	});
	return result;
	// for (let arg of args) {
	// 	arg += args;
	// 	return arg;
	// }
};
// console.log(add(2, 5));
const subtract = function (...args) {
	let result = args[1];
	result;
	args.forEach((item) => {
		result -= item;
	});

	return result;
};
console.log(subtract(5, 4));
const sum = function (...args) {
	let result = 0;
	args.forEach((item) => {
		result += item;
	});
	return result;
};

const multiply = function (...args) {
	let result = 0;
	args.forEach((item) => {
		result *= item;
	});
	return result;
};
const power = function (...args) {
	let result = 0;
	args.forEach((item) => {
		result **= item;
	});
	return result;
};
const factorial = function (...args) {};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
