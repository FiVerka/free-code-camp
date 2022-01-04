/*
A function "countOnline" accepts one argument (a users object).  within 
This function uses a for...in statement to loop through the users object passed into the function
and returns the number of users whose online property is set to true.
Each user have an online property with either a true or false value.
*/


function countOnline(usersObj) {
  let counter = 0;
  for (let user in usersObj) {
    counter += usersObj[user]["online"];
  }
  return counter;
}


countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } })  // 1
countOnline({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } })  // 2
countOnline({ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } })  // 0
