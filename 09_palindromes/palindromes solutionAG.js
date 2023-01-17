// let regLetters = /[a-z]/gi;
const palindromes = function (string) {
	//there are many ways of checking the solution for palindromes without using regex. Here is one.
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'; //create a variable that holds all the letters of the alphabet

	//chaincommands that will take the input string, convert to lowercase, split, reverse, filter only letters of the alphabet, before rejoining them together.
	const cleanedString = string
		.toLowerCase()
		.split('')
		.filter((letter) => alphabet.includes(letter))
		.join('');

	//Now we make a new const from the cleaned string, and reverse it.
	const reversedString = cleanedString.split('').reverse().join('');

	//we then finally compare cleanedString & reversedString which returns true/false
	return cleanedString === reversedString;
};
console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('ZZZZ car, a man, a maracazzzz.'));
console.log(palindromes('this is not a paldindrome'));
// Do not edit below this line
module.exports = palindromes;
