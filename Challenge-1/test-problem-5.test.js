const { expect } = require('@jest/globals');
const data=require('../Data-file/persons')

const persons_age=require('./problem-5');



describe('persons age of all persons', () => {
    beforeEach(() => {
      console.log = jest.fn();
    });
  
    test('persons in live Austrailia', () => {
        let res=persons_age(data);
  
      expect(res.length).toBe(data.length);
    });
});