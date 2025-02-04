const { expect } = require('@jest/globals');
const inventory = require('../Data-file/users');
const staying_in_Germany = require('./problem-2');

describe('The users staying in germany', () => {
  // Mock console.log to capture the output
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('The users staying in germany', () => {
    let people=staying_in_Germany(inventory);
    
    expect(Object.keys(people).length).toBe(2);
  });
});