// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. 
// Using the array you just obtained from the previous problem, 
// find out how many cars were made before the year 2000 and return the array of older cars 
// and log its length.


const data=require('../Data-file/cars');
const find_car_years=require('./problem-4');


const cars_years=find_car_years(data);
let result=[];

function cars_below_2000(inventory){
   cars_years.forEach((year)=>{
    if(year<2000){
        result.push(year);
    }
   });   
 console.log(result.length);
 return result;
}

module.exports=cars_below_2000;