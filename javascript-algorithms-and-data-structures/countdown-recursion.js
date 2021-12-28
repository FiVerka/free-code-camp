/*
A function called "countdown" with one parameter ("n").
The function uses recursion to return an array containing
the integers "n" through 1 based on the "n" parameter.

* If the function is called with a number less than 1,
  the function returns an empty array.

Example:
countdown(5) -> returns [5, 4, 3, 2, 1]
*/

function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
