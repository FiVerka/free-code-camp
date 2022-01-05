/*
Remove all falsy values from an array.
*/

function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

bouncer([7, "ate", "", false, 9]);  // [ 7, 'ate', 9 ]
