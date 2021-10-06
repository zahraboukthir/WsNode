// on a 3 types de module
// local module => cree dans un projet

//find user by name : fid or filter
// function findUserByName(array, name) {
//     return array.find((user) => user.name.toLowerCase() === name.toLowerCase());
//   }


const getUser=(arr,searchedname)=>{
   if (arr.find((user)=> user.name === searchedname)) {
       return  arr.find((user)=> user.name.toLowerCase() === searchedname.toLowerCase());
   } else {
      return  ("no user")
   }

}

 //moyen d'age 
  const getAvreageAge=(arr)=>{
    // let res = 0;
  
    // for (let i = 0; i < array.length; i++) {
    //   res += array[i].age;
    // }
    // return res / array.length;
  return  arr.map(el=>el.age).reduce((acc,curr)=>acc+curr)/arr.length
  }
  //console.log(module)=> global obj process /console.log/setTimeout
  module.exports = {
    getUser,
    getAvreageAge,
  };
//  console.log(module) 