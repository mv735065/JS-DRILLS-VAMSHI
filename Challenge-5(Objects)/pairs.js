const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  let list = [];
  for (let key in obj) {
    list.push([key, obj[key]]);
  }

  return list;
}

console.log(pairs(testObject));
