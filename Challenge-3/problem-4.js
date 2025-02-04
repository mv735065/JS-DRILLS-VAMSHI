// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot.
//  Execute a function that will return an array from the dealer data 
// containing only the car years and log the result in the console as it was returned.






const data=require('../Data-file/cars');

function find_car_years(inventory){
   let years=[];

   inventory.forEach((car)=>{
    years.push(car.car_year);
   })

   years.sort();
   console.log(years);
 return years;
}



module.exports=find_car_years;