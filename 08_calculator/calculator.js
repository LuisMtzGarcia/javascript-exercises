const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const multiply = function(array) {
  let result = 0;
  
  if (result === 0 && array.length > 0) {
    result = 1;
  }

  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }

  return result;
};

const power = function(num, power) {
  let result = num;
	for (let i = 1; i < power; i++) {
    result *= num;
  }

  return result;
};

const factorial = function(num) {
	let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
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
