// Q1 Find all users who are interested in playing video games.


const data = require("../Data-file/users");


function users_playing_videoGames(users) {
    let result = {};
    let game = "Video Games";

    
    for(let userKey in users) {

        let user = users[userKey];

        if (user && user.interests && contains_game(user.interests,game)) result[userKey]=user;
    }
    return result;
}

function contains_game(arrayOfGames,target){

    for(let game of arrayOfGames){
        if(game.indexOf(target)!=-1) return true;
    }
    return false;
}

console.log(users_playing_videoGames(data))
// users_playing_videoGames(data);

module.exports=users_playing_videoGames;