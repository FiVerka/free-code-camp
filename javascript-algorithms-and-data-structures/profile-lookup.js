/*
We have an array of objects representing different people in our contacts lists.

A "lookUpProfile" function that takes "name" and a property ("prop") as arguments.
The function checks if "name" is an actual contact's "firstName" and the given
property ("prop") is a property of that contact.

* If both are true,
  then the function returns the "value" of that property.
* If "name" does not correspond to any contacts 
  then the function returns the string "No such contact".
* If "prop" does not correspond to any valid properties of a contact found to match "name"
  then the function returns the string "No such property".
  
*/

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] == name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    } 
  }
  return "No such contact";
}

// Examples
lookUpProfile("Akira", "likes");  // [ 'Pizza', 'Coding', 'Brownie Points' ]
lookUpProfile("Petra", "");  // No such contact
lookUpProfile("Akira", "");  // No such property
lookUpProfile("Kristian", "lastName");  // Vos
lookUpProfile("Sherlock", "likes");  // [ 'Intriguing Cases', 'Violin' ]
lookUpProfile("Harry", "likes");  // [ 'Hogwarts', 'Magic', 'Hagrid' ]
lookUpProfile("Bob", "number");  // No such contact
lookUpProfile("Bob", "potato");  // No such contact
lookUpProfile("Akira", "address");  // No such property
