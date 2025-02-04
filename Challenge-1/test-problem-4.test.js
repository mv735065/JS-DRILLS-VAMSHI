const person_at_index=require('./problem-4');
const data=require('../Data-file/persons');


describe('person_at_index', () => {
    beforeEach(() => {
      console.log = jest.fn();
    });
  
    test(' print  of person with index', () => {
        person_at_index(data,index=3);

      expect(console.log).toHaveBeenCalledWith(`Persons name is Charlie and city is Paris`

      );
    });
  
  
    test('should print hobbies of person with specific age', () => {
      person_at_index(data);
  
      expect(console.log).toHaveBeenCalledWith("Provide index");
    });
  });