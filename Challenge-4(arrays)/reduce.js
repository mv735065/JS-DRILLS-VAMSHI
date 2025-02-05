const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function reduce(elements, cb, startingValue) {
  // Do NOT use .reduce to complete this function.
  // How reduce works: A reduce function combines all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
 
  let index = 0;
  if (startingValue === undefined) startingValue = elements[index++];

  for (; index < elements.length; index++) {
    startingValue = cb(startingValue, elements[index]);
  }

  return startingValue;
}


let sum=reduce(items,(totalSum,element)=>{
    return totalSum=totalSum+element;
},0);

console.log(sum);


console.log(items.reduce((sum,item)=>sum+item,0));

