const email_address = require('./problem-1');
// const result = require('./drill-1'); 

const data=require('../Data-file/persons');

test('total email is 10', () => {

  let res=email_address(data);

  let expected=[
    'alice@example.com',
    'bob@example.com',
    'charlie@example.com',
    'david@example.com',
    'eve@example.com',
    'frank@example.com',
    'grace@example.com',
    'hannah@example.com',
    'ivy@example.com',
    'jack@example.com'
  ];

    expect(res).toEqual(expected);
  });
  
