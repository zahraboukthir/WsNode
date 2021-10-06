const users=require('./contact');
// const local = require("./local");
// console.log(local);
const {getAvreageAge,getUser} = require("./local");
// console.log(local);
// console.log(getAvreageAge);
console.log(users);
console.log(getAvreageAge(users));
console.log(getUser(users, "Jhon"));
