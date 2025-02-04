const { expect } = require('@jest/globals');
const data=require('../Data-file/persons')

const first_hobby=require('./problem-6');



describe('first hobby of each individual', () => {
    beforeEach(() => {
      console.log = jest.fn();
    });
  
    test('first hobby of each individual', () => {
        let hobbies=first_hobby(data);
  
      expect(hobbies.length).toBe(data.length);
    });
});