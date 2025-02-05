const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function filter(elements, cb) {
  // Do NOT use .filter, to complete this function.
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test


  let result = [];
  for (let index = 0; index < elements.length; index++) {
    let element = elements[index];
    if (cb(element)) result.push(element);
  }

  return result;
}


let newArray=filter(items,(element)=>{
    return element%2==0;
});

console.log(newArray);

// console.log(items.filter((element)=>{
//   return element%2==0;
// }));
