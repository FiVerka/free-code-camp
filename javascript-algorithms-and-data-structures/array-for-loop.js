/*
A function "filteredArray" takes "arr", a nested array, and "elem" as arguments, and returns a new array.
"elem" represents an element that may or may not be present on one or more of the arrays nested within "arr".
The function, using a for loop, returns a filtered version of the passed array such that any array nested within "arr" containing "elem" is removed.
*/

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    (arr[i].indexOf(elem) == -1) ? newArr.push(arr[i]) : NaN;
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));  // []
