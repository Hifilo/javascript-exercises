// Second method a bit cleaner, and using array methods

const sumAll2 = function (...args) {
	// copy original just incase

	let original = args.slice();

	//check all inputs are integers, return Error
	if (!args.every(Number.isInteger)) return 'ERROR';

	//check if inputs are negative, if so it returns error
	if (
		args.some((item) => {
			return item < 0;
		})
	) {
		return 'ERROR';
	}
	//sort the inputs from largest first

	args.sort(compareFn);
	function compareFn(a, b) {
		return b - a;
	}
	// make some variables to hold list of numbers and final sum
	let sum = 0;
	let numbers = [];

	//push every number between the 2 inputs into numbers array;
	for (let i = args[1]; i <= args[0]; i++) {
		numbers.push(i);
	}

	//for every element in numbers, add the element to the sum
	numbers.forEach((element) => {
		sum += element;
	});

	// return the sum
	return sum;
};
// console.log(sumAll2(1, 4));
// Do not edit below this line
module.exports = sumAll2;
