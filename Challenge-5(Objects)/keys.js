const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions


function keys(obj) {
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
    let result=[];
    for(let propertyKey in obj){
        result.push(propertyKey);
    }
    return result;
  }



  console.log(keys(testObject));

  console.log(Object.keys(testObject))