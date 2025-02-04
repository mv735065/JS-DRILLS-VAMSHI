//    Create a function to retrieve and display the first hobby of each individual in the dataset.


const data=require('../Data-file/persons');


function first_hobby(persons){
    let hobbies=[];
    persons.forEach((person)=>{
        hobbies.push({[person.name]:person.hobbies[0]})
        console.log(`${person.name}'s first hobbie is ${person.hobbies[0]} `);
    });
    return hobbies;
}

first_hobby(data);

module.exports=first_hobby;