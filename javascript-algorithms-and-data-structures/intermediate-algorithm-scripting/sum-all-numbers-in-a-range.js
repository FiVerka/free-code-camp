/*
We'll pass you an array of two numbers. Return the sum of those two numbers
plus the sum of all the numbers between them. The lowest number will not always come first.
*/

function sumAll(arr) {
  let newArr = [...arr].sort((a,b) => a - b);
  let sum = 0;
  for (let i = newArr[0]; i <= newArr[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);  // 10
sumAll([5, 10]);  // 45
