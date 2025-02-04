//    Implement a loop to access and 
// log the city and country of each individual in the dataset.


const data=require('../Data-file/persons');


data.forEach((person)=>{
    console.log(`City : ${person.city}, Country: ${person.country}`);
})

