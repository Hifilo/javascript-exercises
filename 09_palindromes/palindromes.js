// let regLetters = /[a-z]/gi;
const palindromes = function (string) {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const cleanedString = string
		.toLowerCase()
		.split('')
		.filter((letter) => alphabet.includes(letter))
		.join('');
	cleanedString;

	const flippedStr = cleanedString.split('').reverse().join('');

	return cleanedString === flippedStr;
};
// Do not edit below this line
module.exports = palindromes;
console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('ZZZZ car, a man, a maracazzzz.'));
console.log(palindromes('this is not a paldindrome'));
