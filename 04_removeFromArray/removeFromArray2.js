// let tArr1 = [1, 2, 3, 4];
// let tArr2 = [1, 2, 6, 1];

const removeFromArray = function (...args) {
	let arCounter = args[1].length;
	let arrIndex = args[1];
	// the very first item in our list of arguments is the array, we pull it out with args[0]
	let array = args[0];
	// create a new empty array
	let newArray = [];
	console.log(newArray, arCounter);
	// use forEach to go through the array
	array.forEach((element) => {
		// push every element into the new array
		// UNLESS it is included in the function arguments
		// so we create a new array with every item, except those that should be removed
		if (!args.includes(element)) {
			newArray.push(element);
		}
		console.log(newArray);
	});
	// so we create a new array with every item, except those that should be removed

	return newArray;
};

// console.log(removeFromArray(tArr1, tArr2));
// // Do not edit below this line
module.exports = removeFromArray;
