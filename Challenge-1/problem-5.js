//    Implement a loop to access and print the ages of all individuals in the dataset.


const data=require('../Data-file/persons');






function persons_age(persons){
    let result=[];
       persons.forEach((person)=>{
        result.push({[person.name]:person.age})
               console.log(`Persons name is ${person.name} and Age is ${person.age}`);
       })
     return result;
   }


//    persons_age();

   module.exports=persons_age;