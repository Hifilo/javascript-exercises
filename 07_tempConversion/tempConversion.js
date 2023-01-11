const convertToCelsius = function (temp) {
	//	x °F ≘ (x − 32) × 5/9°C
	const converter = (x) => (x = parseFloat((((temp - 32) * 5) / 9).toFixed(1)));

	return converter();
	// return parseFloat(converter());
};

const convertToFahrenheit = function (temp) {
	//x °C ≘ (x × 9/5 + 32) °F
	const converter = (x) => (x = parseFloat(((temp * 9) / 5 + 32).toFixed(1)));
	return converter();
};
console.log(convertToCelsius(-15));
console.log(convertToFahrenheit(24.5));
// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
