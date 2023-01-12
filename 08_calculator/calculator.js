const add = function (...args) {
	let result = 0;
	args.forEach((item) => {
		result += parseFloat(item);
	});
	return result;
	// for (let arg of args) {
	// 	arg += args;
	// 	return arg;
	// }
};
// console.log(add(2, 5));

const subtract = function (...args) {
	// const result = args.reduce((previous, current) => {
	// 	return parseFloat(previous - current);
	// });
	let result = args[0];
	for (let i = 1; i < args.length; i++) {
		result -= parseFloat(args[i]);
	}
	return result;
};
// console.log(subtract(5, 4));
const sum = (...args) => {
	let result;
	// let defValue = 0;
	// let arEntries = args.entries();
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
// console.log(sum([]));
const multiply = function (...args) {
	let result = 1;
	args.forEach((item) => {
		result = item.reduce((previous, current) => previous * current);
	});
};

multiply([2, 4]);
const power = function (...args) {
	let result = 0;
	args.forEach((item) => {
		result **= item;
	});
	return result === 0;
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
