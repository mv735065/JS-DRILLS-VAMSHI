const { expect } = require('@jest/globals');
const inventory = require('../Data-file/cars');
const find_car_models = require('./problem-3');

describe('The car models', () => {
  // Mock console.log to capture the output
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('The models of all car', () => {
    let cars=find_car_models(inventory);
    
    expect(cars.length).toBe(50);
  });
});
