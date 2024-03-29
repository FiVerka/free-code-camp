/*
Sort an Array Alphabetically using the sort Method
*/

function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));  // [ 'a', 'a', 'c', 'd', 'g', 'z' ]
