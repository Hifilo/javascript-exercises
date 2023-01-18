const fibonacci = function (num) {
	let n1 = 0;
	let n2 = 1;
	let fibArray = [];
	let nextNum;
	if (num < 0) {
		return `OOPS`;
	}
	for (let i = 0; i <= num; i++) {
		console.log(n1);
		fibArray.push(n1);
		nextNum = n1 + n2;
		n1 = n2;
		n2 = nextNum;
	}
	return fibArray[fibArray.length - 1];
};
fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
