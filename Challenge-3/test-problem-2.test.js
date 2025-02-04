const { expect } = require('@jest/globals');
const inventory = require('../Data-file/cars');
const find_last_car = require('./problem-2');

describe('The last car', () => {
  // Mock console.log to capture the output
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('The last car', () => {
    let car = find_last_car(inventory);
    
    expect(console.log).toHaveBeenCalledWith(`Last Car is a 1999 Lincoln Town Car`);
  });
});
