const { expect } = require('@jest/globals');
const inventory = require('../Data-file/users');
const  users_master_degeree= require('./problem-3');

describe('The users master_degeree', () => {
  // Mock console.log to capture the output
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('The users master_degeree', () => {
    let users=users_master_degeree(inventory);
    let ans={
        "John": {
            age: 24,
            desgination: "Senior Golang Developer",
            interests: ["Chess, Reading Comics, Playing Video Games"],
            qualification: "Masters",
            nationality: "Greenland"
        },
        "Rob": {
            age: 34,
            desgination: "Senior Javascript Developer",
            interests: ["Walking his dog, Cooking"],
            qualification: "Masters",
            nationality: "USA"
        }
    }
    expect(users).toEqual(ans);
  });
});