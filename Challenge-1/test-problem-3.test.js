const { expect } = require('@jest/globals');
const data=require('../Data-file/persons')

const isStudentLivesInAustrailia=require('./problem-3');



describe('persons in live Austrailia', () => {
    beforeEach(() => {
      console.log = jest.fn();
    });
  
    test('persons in live Austrailia', () => {
      isStudentLivesInAustrailia(data);
  
      expect(console.log).toHaveBeenCalledWith('persons in live Austrailia Hannah');
    });
});