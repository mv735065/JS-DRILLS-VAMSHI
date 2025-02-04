// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website.
//  Execute a function to Sort all the car model names into alphabetical order and 
// log the results in the console as it was returned.





const data=require('../Data-file/cars');

function find_car_models(inventory){
   let models=[];

   inventory.forEach((car)=>{
    models.push(car.car_model);
   })

 models.sort();
  console.log(models);
  return models;
}


find_car_models(data);

module.exports=find_car_models;