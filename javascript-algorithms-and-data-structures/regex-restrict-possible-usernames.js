/*
Here are some simple rules that users have to follow when creating their username:

1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. 
   There can be zero or more of them at the end.
   Username cannot start with the number.
3) Username letters can be lowercase and uppercase.
4) Usernames have to be at least two characters long.
   A two-character username can only use alphabet letters as characters.

*/

let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]+[A-Za-z]+$|^[A-Za-z]+[\d|A-Za-z]\d$/;
let result = userCheck.test(username);

// Examples
/*
JackOfAllTrades  // true
JACK  // true
J  // false
Jo  // true
Oceans11  // true
RegexGuru  // true
007 // false
9  // false
A1  // false
BadUs3rnam3  // false
Z97  // true
c57bT3  // false
AB1  // true
J%4  // false
*/
