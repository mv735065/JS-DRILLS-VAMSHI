// Q4 Group users based on their Programming language mentioned in their designation.


const data = require("../Data-file/users");

function group_users_on_designation(users = data) {
  let result = {};
  let languages = ["Python", "Golang", "Javascript"];

  for (let userKey in users) {
    let user = users[userKey];
    let desgination = user.desgination;
    let user_language = get_user_lang(desgination, languages);
    if (user_language) {
      if (!result[user_language]) {
        result[user_language] = [];
      }
    }

    result[user_language].push(userKey);
  }
  return result;
}

function get_user_lang(desgination, languages) {
    for(let i=0;i<languages.length;i++){
        if(desgination.indexOf(languages[i])!=-1) return languages[i];
    }
}

// console.log(group_users_on_designation(data));

module.exports=group_users_on_designation;