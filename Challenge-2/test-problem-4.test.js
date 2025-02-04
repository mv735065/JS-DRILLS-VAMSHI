const { expect } = require('@jest/globals');
const inventory = require('../Data-file/users');
const group_users_on_designation = require('./problem-4');

describe('The users designatin', () => {
  // Mock console.log to capture the output
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('The users designatin', () => {
    let answer=group_users_on_designation(inventory);
    
    expect(Object.keys(answer).length).toBe(3);
  });
});