/*
A function "copyMachine" takes "arr" (an array) and "num" (a number) as arguments.
The function returns a new array made up of "num" copies of "arr".
*/

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));  // [ [ true, false, true ], [ true, false, true ] ]
