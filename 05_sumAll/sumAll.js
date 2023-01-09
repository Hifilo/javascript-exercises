// First Method, (Really messy lol)

const sumAll = function (...args) {
	const checkResult = check(args);

	//check the inputs and return Error
	if (checkResult === `ERROR`) {
		return checkResult;
	}
	//copy original arguments to new variables
	let array = args.slice();
	let arraySort = array.sort(compareFn);
	arraySort;
	let numbers = [];
	let length = arraySort[0];
	let sum;

	//populate range of numbers
	for (let i = 0; i < length + 1; i++) {
		sum = 0;
		numbers.push(i);
	}

	//	sum all the numbers
	numbers.forEach((item) => {
		sum += item;
	});
	return sum;

	//	compare function for sort
	function compareFn(a, b) {
		return b - a;
	}

	//function to accept only numbers & any positive values
	function check(test) {
		for (const value of test) {
			if ((typeof value !== 'number') | (value < 0)) {
				return `ERROR`;
			}
		}
		return true;

		// A method using callback function
		/* 		if (test.includes(value => typeof value !== 'number' || value < 0)) {
    return `ERROR`;
  }
  return true; */
	}
};
// console.log(array, numbers);

// 	take arguments
// create array
// set array length to 2nd integer
// populate array with numbers between starting integer and last integer

// then add all numbers together

// Do not edit below this line
module.exports = sumAll;
