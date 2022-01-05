/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
Do not use .endsWith() method.
*/

function confirmEnding(str, target) {
  return str.slice(-target.length) == target;
}

confirmEnding("Bastian", "n");  // true
confirmEnding("Abstraction", "action");  // true
