/*
A "squareList" function should return a new array containing the squares
of only the positive integers (decimal numbers are not integers)
when an array of real numbers is passed to it. 
*/


const squareList = arr => {
  return arr.filter(item => item > 0 && Number.isInteger(item)).map(num => num * num);
};


console.log(squareList([-3, 4.8, 5, 3, -3.2]))  // [ 25, 9 ]
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));  // [16, 1764, 36]
console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]));  // [9, 100, 49]
