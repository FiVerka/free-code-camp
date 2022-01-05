/*
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.
Do not use the built-in .repeat() method.
*/

// #1 Solution
function repeatStringNumTimes(str, num) {
  let newString = ""
  for (let i = 0; i < num; i++) {
    newString += str;
  }
  return newString;
}

// #2 Recursive solution
function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

repeatStringNumTimes("abc", 3);  // abcabcabc
