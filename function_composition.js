const square = (number) => number * number;

const double = (number) => number * 2;

const addFive = (number) => number + 5;

const compose = (number) => addFive(double(square(number)));

console.log(compose(5));
