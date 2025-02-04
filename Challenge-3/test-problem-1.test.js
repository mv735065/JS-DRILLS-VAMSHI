const { expect } = require('@jest/globals');
const inventory=require('../Data-file/cars');

const find_car_withId=require('./problem-1')


test("car with id 33",()=>{
    let obj=  { id: 33, car_make: "Jeep", car_model: "Wrangler", car_year: 2011 };

    expect(find_car_withId(inventory,33)).toEqual(obj);
})



test("car with id null",()=>{

    expect(find_car_withId(inventory,null)).toBeNull;
})