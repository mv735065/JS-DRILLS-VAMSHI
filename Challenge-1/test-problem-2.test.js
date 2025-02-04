const print_hoobies_specific_age=require('./problem-2');
const data=require('../Data-file/persons');


describe('print_hoobies_specific_age', () => {
    beforeEach(() => {
      console.log = jest.fn();
    });
  
    test('should print hobbies of person with age 30', () => {
      print_hoobies_specific_age(data,age=30);

      expect(console.log).toHaveBeenCalledWith(`hobbies of person of ${age} is reading,painting`);
    });
  
  
    test('should print hobbies of person with specific age', () => {
      // Call the function with a specific age (e.g., age 25)
      print_hoobies_specific_age(data);
  
      // Check that console.log was called with the correct output
      expect(console.log).toHaveBeenCalledWith("Provide Age");
    });
  });