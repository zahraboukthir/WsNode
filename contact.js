// to add a 3rd party module we need
// to intialize npm
// => npm init
const uuid=require('uuid');
//console.log(uuid);
const users = [
    {
      name: "jhon",
      age: 30,
      id:uuid.v4()
    },
    {
      name: "Mohamed",
      age: 25,
      id:uuid.v4()
    },
    {
      name: "Ali",
      age: 25,
      id:uuid.v4()
    },
    {
      name: "Dorra",
      age: 25,
      id:uuid.v4()
    },
  ];
// console.log(users.map(el=>el.age).reduce((acc,curr)=>acc+curr)/users.length);
// console.log(users.find((user)=> user.name ==="Dorra"));
// console.log(users.filter((user)=> user.name ==="Dorra"));
module.exports =users
// console.log(module)