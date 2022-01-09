/*
Compare two arrays and return a new array with any items only
found in one of the two given arrays, but not both. In other
words, return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  return [
    ...arr1.filter(x => !arr2.includes(x)),
    ...arr2.filter(x => !arr1.includes(x))
    ];
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);  // [ 'pink wool', 'diorite' ]

