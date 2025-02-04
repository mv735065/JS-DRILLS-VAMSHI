const { expect } = require('@jest/globals');
const inventory = require('../Data-file/cars');
const cars_audi_bmw = require('./problem-6');

describe('The cars of Audi,BMW', () => {
  // Mock console.log to capture the output
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('The cars of Audi,BMW', () => {
    let cars=cars_audi_bmw(inventory);

    expect(cars.length).toBe(6);


  });
});