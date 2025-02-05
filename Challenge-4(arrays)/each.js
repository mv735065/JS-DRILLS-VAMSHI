const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function each(elements, cb) {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each

  for (let index = 0; index < elements.length; index++) {
    cb(elements[index], index);
  }
}

each(items, (ele, index) => {
  console.log(ele * ele);
});

