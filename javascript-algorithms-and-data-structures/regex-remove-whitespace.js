/*
Remove the whitespace at the start and end of string without using the string.trim() method.
Use regex.
*/

// # solution 1
let hello = "   Hello, World!  ";
let wsRegex = /^\s+(.+!)\s+$/;
let result = hello.replace(wsRegex, "$1");  // "Hello, world!"

// # solution 2
let hello2 = hello;
let wsRegex2 = /^\s+|\s+$/;
let result2 = hello2.replace(wsRegex2, "");  // "Hello, world!"
