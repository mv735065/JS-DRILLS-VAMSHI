// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. 
// Execute a function to find what the make and model of the last car in the inventory is?
//   Log the make and model into the console in the format of:
// ("Last car is a *car make goes here* *car model goes here*");




const data=require('../Data-file/cars');

function find_last_car(inventory){
  let car=inventory[inventory.length-1];
  console.log(`Last Car is a ${car.car_year} ${car.car_make} ${car.car_model}`);
return car;
}


find_last_car(data);

module.exports=find_last_car;