// Q2 Find all users staying in Germany.


const data = require("../Data-file/users");


function staying_in_Germany(users){
    let result={};
    for(let userKey in  users){
      let user=users[userKey];
      if(user.nationality==='Germany'){
        result[userKey]=(user);
      }
    }
    return result;
}


// console.log(staying_in_Germany(data));
module.exports=staying_in_Germany;