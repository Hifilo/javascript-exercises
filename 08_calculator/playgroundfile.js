const multiply = function (...args) {
	let result = 1;
	for (let value of args) {
		result *= value;
	}
	return result;
};
multiply([2, 4]);

const multiply2 = function (...args) {
	let result = 1;
	for (let i = 0; i < args.length; i++) {
		result *= args[i];
	}
	console.log(result);
	return result;
};
multiply2([2, 4]);

const multiply3 = function (...args) {
	let result = 1;
	for (let i = 0; i < args.length; i++) {
		if (isNaN(args[i])) {
			console.log('Input contains NaN');
			return NaN;
		}
		result *= args[i];
	}
	console.log(result);
	return result;
};
multiply3([2, 4, NaN]);

function test(...args) {
	console.log(args);
}
test([2, 4]);
