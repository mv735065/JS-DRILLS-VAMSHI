const { expect } = require('@jest/globals');
const inventory = require('../Data-file/users');
const users_playing_videoGames = require('./problem-1');

describe('The users palying video games', () => {
  // Mock console.log to capture the output
  beforeEach(() => {
    console.log = jest.fn();
  });

  test('The users palying video games', () => {
    let user=users_playing_videoGames(inventory);
     let ans={ John: {
      age: 24,
      desgination: 'Senior Golang Developer',
      interests: [ 'Chess, Reading Comics, Playing Video Games' ],
      qualification: 'Masters',
      nationality: 'Greenland'
    },
    Ron: {
      age: 19,
      desgination: 'Intern - Golang',
      interests: [ 'Video Games' ],
      qualification: 'Bachelor',
      nationality: 'UK'
    }};
    
    expect(user).toEqual(ans);
  });
});