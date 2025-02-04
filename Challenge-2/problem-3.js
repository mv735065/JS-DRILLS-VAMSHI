
// Q3 Find all users with masters Degree.


const data = require("../Data-file/users");

function users_master_degeree(users = data) {
  let result = {};

  for (let userKey in users) {
    let user = users[userKey];

    if (user.qualification==="Masters")
      result[userKey] = user;
  }
  return result;
}
// console.log(users_master_degeree(data));
module.exports=users_master_degeree;
