/*
A function "quickCheck" takes an "array" and an "element" as arguments.
The function with using indexOf() returns true if the passed "element" exists on the "array", and false if it does not.
*/

function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));  // false
