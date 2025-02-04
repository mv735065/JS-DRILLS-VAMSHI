
// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory. 
//  Execute a function and return an array that only contains BMW and Audi cars. 
//  Once you have the BMWAndAudi array, use JSON.stringify()
//  to show the results of the array in the console.

const data=require('../Data-file/cars');

function cars_audi_bmw(inventory){
      let result=[];

      inventory.forEach((car)=>{
        if(car.car_make==='BMW' || car.car_make==='Audi') result.push(car);
      })
   
    console.log(JSON.stringify(result));
    return result;
}

cars_audi_bmw(data);

module.exports=cars_audi_bmw;
