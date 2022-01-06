/*
Write a function that splits an array (first argument) into groups
the length of size (second argument) and returns them as a two-dimensional array.
*/

// #1 Solution
function chunkArrayInGroups(arr, size) {
  let newArray = [];
  while (arr.length >= size) {
    newArray.push(arr.splice(0, size));
  }
  if (arr.length != 0) {
    newArray.push(arr);
  }
  return newArray;
}

// #2 Solution: recursion, spread operator
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size) {
    return [arr];
  } else {
    return [arr.splice(0, size), ...chunkArrayInGroups(arr, size)]
  }
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);  // [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);  // [[0, 1, 2, 3], [4, 5]]
