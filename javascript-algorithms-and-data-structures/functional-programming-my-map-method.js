/*
Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). 
*/

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]))
  }
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s);  // [ 46, 130, 196, 10 ]
