/*
Queue is an abstract Data Structure where items are kept in order. 
New items can be added at the back of the queue and old items 
are taken off from the front of the queue.
Function nextInLine takes an array (arr) and a number (item) as arguments.
It adds the number to the end of the array, then returns
the element that was removed.
*/

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));  // 1
console.log("After: " + JSON.stringify(testArr));
console.log(nextInLine([], 5));  // 5
console.log(nextInLine([], 1));  // 1
console.log(nextInLine([2], 1));  // 2
console.log(nextInLine([5, 6, 7, 8, 9], 1));  // 5
console.log(nextInLine(testArr, 10));  // 2
console.log(JSON.stringify(testArr));  // [3, 4, 5, 6, 10]
