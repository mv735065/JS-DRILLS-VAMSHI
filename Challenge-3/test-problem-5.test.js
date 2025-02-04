const { expect } = require('@jest/globals');
const inventory = require('../Data-file/cars');
const  cars_below_2000= require('./problem-5');

describe('The car  below 2000', () => {
  // Mock console.log to capture the output
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('The car  below 2000', () => {
    let cars=cars_below_2000(inventory);
    expect(cars.length).toBe(25);


  });
});