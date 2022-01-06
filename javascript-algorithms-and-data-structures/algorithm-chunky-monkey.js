/*
Write a function that splits an array (first argument) into groups
the length of size (second argument) and returns them as a two-dimensional array.
*/

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

chunkArrayInGroups(["a", "b", "c", "d"], 2);  // [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);  // [[0, 1, 2, 3], [4, 5]]
