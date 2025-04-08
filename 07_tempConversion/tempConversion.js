const convertToCelsius = function(num) {
  return parseFloat(((num - 32) * (5/9)).toFixed(1));
};

// (°F − 32) × 5/9 = °C
// round to one decimal place

const convertToFahrenheit = function(num) {
  return parseFloat(((num * (9/5)) + 32).toFixed(1));
};

//(°C × 9/5) + 32 = °F
// round to one decimal place

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
