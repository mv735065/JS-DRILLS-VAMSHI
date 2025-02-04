//    Implement a function that retrieves and 
// prints the hobbies of individuals with a specific age, 
// say 30 years old.


function print_hoobies_specific_age(data,age){
    if(!age){
        console.log("Provide Age");
    }
    data.forEach((person)=>{
        if(person.age==age){
            console.log(`hobbies of person of ${age} is ${person.hobbies}`);
        }
     })
}
// print_hoobies_specific_age();




module.exports = print_hoobies_specific_age;


