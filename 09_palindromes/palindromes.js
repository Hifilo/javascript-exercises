// let regLetters = /[a-z]/gi;
const palindromes = function (word) {
	word = word.toLowerCase();
	const wordStandard = word.split(',').join('');
	wordStandard;

	const wordReverse = wordStandard.split('').reverse().join('');
	// wordStandard = wordStandard.flat();

	wordReverse;

	let unicode;
	let unicodeReverse;
	for (let i = 0; i < wordStandard.length; i++) {
		unicode = wordStandard.charCodeAt(i);
		console.log(unicode);
	}
	// for (let i = 0; i < wordReverse.length; i++) {
	// 	unicodeReverse = wordReverse.charCodeAt(i);
	// 	console.log(unicodeReverse);
	// }
	for (let i = wordStandard.length - 1; i >= 0; i--) {
		unicodeReverse = wordStandard.charCodeAt(i);
		console.log(unicodeReverse);
	}
	let result = unicode === unicodeReverse ? true : false;
	console.log(result);
	return result;
};

// Do not edit below this line
module.exports = palindromes;
// console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('ZZZZ car, a man, a maracaz.'));
