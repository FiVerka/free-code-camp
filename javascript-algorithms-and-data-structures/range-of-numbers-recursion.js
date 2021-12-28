/*
A function named "rangeOfNumbers" with two parameters.
The function returns an array of integers which 
begins with a number represented by the "startNum" parameter and 
ends with a number represented by the "endNum" parameter.
The function uses recursion by calling itself.
*/

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
};

// Examples
rangeOfNumbers(1, 5)  // [1, 2, 3, 4, 5]
rangeOfNumbers(6, 9)  // [6, 7, 8, 9]
rangeOfNumbers(9, 6)  // [ ]
rangeOfNumbers(4, 4)  // [4]
