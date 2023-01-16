// let regLetters = /[a-z]/gi;
const palindromes = function (word) {
	let result;
	word = word.toLowerCase();
	if (word.includes(',' || '.' || '!')) {
		word = word.replaceAll(',', '');
		word = word.replaceAll('.', '');
	}
	// let newWord = '';
	for (let i = 0; i < word.length; i++) {
		if (word[i] === word[i + 1])
			if (word[i - 1] === word[i])
				// newWord += word[i];
				return false;
	}
	// newWord;

	const wordStandard = word.split(',').join();
	wordStandard;

	const wordReverse = wordStandard.split('').reverse().join('');
	// wordStandard = wordStandard.flat();

	wordReverse;

	let charCode = '';
	let charCodeReverse = '';
	for (let i = 0; i < wordStandard.length; i++) {
		charCode += wordStandard.charCodeAt(i);
		console.log(charCode);
	}
	for (let i = wordReverse.length - 1; i >= 0; i--) {
		charCodeReverse += wordReverse.charCodeAt(i);
		console.log(charCodeReverse);
	}
	// for (let i = 0; i < wordReverse.length; i++) {
	// 	unicodeReverse = wordReverse.charCodeAt(i);
	// 	console.log(unicodeReverse);
	// }
	// for (let i = wordStandard.length - 1; i >= 0; i--) {
	// 	charCodeReverse += wordStandard.charCodeAt(i);
	// 	console.log(charCodeReverse);
	// }
	charCode;
	charCodeReverse;

	result = charCode === charCodeReverse ? true : false;
	console.log(result);
	return result;
};

// Do not edit below this line
module.exports = palindromes;
console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('ZZZZ car, a man, a maracaz.'));
