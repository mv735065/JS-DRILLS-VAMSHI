const { expect } = require('@jest/globals');
const inventory = require('../Data-file/cars');
const find_car_years = require('./problem-4');

describe('The car years', () => {
  // Mock console.log to capture the output
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('The years of all car', () => {
    let cars=find_car_years(inventory);
    expect(cars.length).toBe(50);


  });
});
