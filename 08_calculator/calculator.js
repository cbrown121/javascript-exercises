const add = function(num1, num2) { // Good
	return num1 + num2;
};

const subtract = function(num1, num2) { // Good
	return num1 - num2;
};

const sum = function(arr) { // Good
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};


const multiply = function(arr) { // Bad
  return (arr.reduce((accumulator, currentValue) => accumulator * currentValue, arr[0]) / 2);
};

const power = function(num1, num2) { // Good
	return num1 ** num2;
};

const factorial = function(num) { // Good
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
