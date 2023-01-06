// let testArray = [1, 2, 3, 4];

const removeFromArray = function (array, ...args) {
	let newArray = array.slice();
	let arIndex = args.slice();
	console.log(arIndex);
	console.log(arIndex.length);

	newArray = newArray.filter((element) => {
		return !arIndex.includes(element);
	});

	console.log(newArray);
	// function filterOne(value) {
	// 	return value;
	// }
	// for (let i = 0; i <= args.length; i++) {
	// 	newArray = newArray.filter((newArray) => {
	// 		newArray !== arIndex;

	// 	});
	// 	console.log(newArray);

	// 	return newArray;
	// }
	return newArray;
};
// // Do not edit below this line
module.exports = removeFromArray;
