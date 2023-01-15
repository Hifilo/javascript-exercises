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
	args = args.flat();
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

const factorial = (num) => {
	let result = 1;
	let holder = [];
	for (let i = 1; i <= num; i++) {
		holder.push(i);
	}
	return result;
};

console.log(factorial(7));

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

function factorialize(num) {
	if (num === 0 || num === 1) return 1;
	for (var i = num - 1; i >= 1; i--) {
		i;
		num *= i;
	}
	return num;
}
console.log(factorialize(6));

function arrayFill(args) {
	let multiplier = [];
	for (let i = 1; i <= args; i++) {
		multiplier.push(i);

		// element.flat(element.push(i));
	}
	console.log(multiplier);
}
arrayFill(5);
