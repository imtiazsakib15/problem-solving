const numbers = [2, 3, 4, 5, 6, 7, 12, 15];

const sumOfEvenNumbers = (arrayOfNumbers) =>
  arrayOfNumbers.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc), 0);

console.log(sumOfEvenNumbers(numbers));
