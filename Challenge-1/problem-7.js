//    Write a function that accesses and prints the names and
//  email addresses of individuals aged 25.


const data=require('../Data-file/persons');


function print_email_name_of_individual(persons,age){
  let result=[];
    persons.forEach((person)=>{
      if(person.age===age)  console.log(`${person.name}' , ${person.email} of age ${person.age}} `);
      result.push(`${person.name} , ${person.email}, ${person.age}`)
    });
    return result;
}

// print_email_name_of_individual(25);

module.exports=print_email_name_of_individual;