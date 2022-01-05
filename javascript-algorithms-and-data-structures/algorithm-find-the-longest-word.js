/*
Return the length of the longest word in the provided sentence.
*/

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(str => str.length));
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");  // 6
