const sumAll = function (...args) {
	let array = args.slice();

	let arraySort = array.sort(compareFn);
	arraySort;
	let numbers = [];
	let length = arraySort[0];

	for (let i = 0; i < length + 1; i++) {
		numbers.push(i);
	}
	let sum = 0;
	numbers.reverse();
	numbers.forEach((item) => {
		// console.log(item);
		sum = sum + item;
	});

	function compareFn(a, b) {
		return b - a;
	}

	console.log(sum);
	return sum;

	// console.log(array, numbers);

	/* take arguments
create array 
set array length to 2nd integer
populate array with numbers between starting integer and last integer

then add all numbers together

*/
};

sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
