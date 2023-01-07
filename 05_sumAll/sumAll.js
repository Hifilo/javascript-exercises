const sumAll = function (...args) {
	const checkResult = check(args);

	if (checkResult === `ERROR`) {
		return checkResult;
	}
	// console.log(args);
	// let test = [10, 90];
	// console.log(check(args));

	let array = args.slice();
	let arraySort = array.sort(compareFn);
	arraySort;
	let numbers = [];
	let length = arraySort[0];
	let sum;

	for (let i = 0; i < length + 1; i++) {
		sum = 0;
		numbers.push(i);
	}

	numbers.forEach((item) => {
		// console.log(item);
		sum = sum + item;
	});
	console.log(sum);
	return sum;

	function compareFn(a, b) {
		return b - a;
	}

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

	// console.log(array, numbers);

	/* take arguments
create array 
set array length to 2nd integer
populate array with numbers between starting integer and last integer

then add all numbers together

*/

	// sumAll(10, '90');
};
// Do not edit below this line
module.exports = sumAll;
