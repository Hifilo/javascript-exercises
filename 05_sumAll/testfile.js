function maxFirst1(min, max) {
	if (min > max) {
		const temp = min;
		min = max;
		max = temp;
	}
}

function maxFirst2(...args) {
	//How To when using ...args
	if (args.length <= 2) {
		let min = args[0];
		let max = args[1];
		if (min > max) {
			const temp = min;
			min = max;
			max = temp;
		}
	}
	let arraySort = args.sort(compareFn);

	function compareFn(a, b) {
		return b - a;
	}
}
