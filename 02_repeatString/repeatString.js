const repeatString = function (string, repeats) {
	let mainStr = string;
	let repeatStr = repeats;
	let groupStr;
	if (repeats < 0) {
		return `ERROR`;
	}
	if (repeats === 0) {
		groupStr = ``;
	}

	for (let i = 0; i < repeatStr; i++) {
		groupStr = `${mainStr}${mainStr.repeat(i)}`;
	}
	return groupStr;
};

// Do not edit below this line
module.exports = repeatString;
