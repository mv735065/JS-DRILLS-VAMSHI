//    Given the dataset of individuals, write a function that accesses and 
// returns the email addresses of all individuals.

const data=require('../Data-file/persons');
  
  function email_address(arrayOfObjects=data){
    let result=[];
    arrayOfObjects.forEach((item)=>{
        result.push(item.email);
    });
    return result;
    
  }

  console.log(email_address(data));


  module.exports = email_address;