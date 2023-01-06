const reverseString = function (word) {
	const string1 = [...word];
	console.log(string1);
	let rstring = string1.reverse();
	return rstring.join('');
};
console.log(reverseString(`hello`));
// Do not edit below this line
module.exports = reverseString;
