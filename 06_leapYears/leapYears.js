const leapYears = function (...args) {
	let leapYr = false;
	// console.log(args.every((args) => typeof args === `bigint`));
	// console.log(typeof args[args]);

	if (args % 4 === 0 && (args % 100 !== 0 || args % 400 === 0)) {
		console.log((leapYr = true));
	} else {
		console.log((leapYr = false));
		leapYr;
	}
	leapYr;
	return leapYr;
};

//more concise method

// const leapYears = function (args) {
// 	return args % 4 === 0 && (args % 100 !== 0 || args % 400 === 0);
// };



leapYears(700);
// Do not edit below this line
module.exports = leapYears;


//pseudocode
// [1n, 2, 3n].every((x) => typeof x == 'bigint');
// false[(1n, 2n, 3n)].every((x) => typeof x == 'bigint');
// true;

/* x/4 = leap
leap / 100 = no leap
(leap/100)/400) = leap */

