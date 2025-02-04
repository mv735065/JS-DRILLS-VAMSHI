//    Create a function that extracts and 
// displays the names of individuals who are students (`isStudent: true`) 
// and live in Australia.

function isStudentLivesInAustrailia(persons){
 let result=[];
    persons.forEach((person)=>{
         if(person.isStudent && person.country==='Australia'){
            console.log(`persons in live Austrailia ${person.name}`);
           
         }
    })
//   return result;
}
// isStudentLivesInAustrailia();

module.exports=isStudentLivesInAustrailia;