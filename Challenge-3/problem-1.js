// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. 
// Help the dealer find out which car has an id of 33 by calling a function that 
// will return the data for that car. Then log the car's year, make,
//  and model in the console log in the format of:
// ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");


const data=require('../Data-file/cars');

function find_car_withId(inventory,id){
  let car=inventory[id-1];
  if(car)
  console.log(`Car ${id} is a ${car.car_year} ${car.car_make} ${car.car_model}`);
return car;
}


find_car_withId(data,33);

module.exports=find_car_withId;