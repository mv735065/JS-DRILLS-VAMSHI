const { expect } = require('@jest/globals');
const data=require('../Data-file/persons')

const print_email_name_of_individual=require('./problem-7');



describe('prints the names and email addresses of individuals aged 25', () => {
    beforeEach(() => {
      console.log = jest.fn();
    });
  
    test('prints the names and email addresses of individuals aged 25', () => {
        let result=print_email_name_of_individual(data);
  
      expect(result.length).toBe(10);
    });
});