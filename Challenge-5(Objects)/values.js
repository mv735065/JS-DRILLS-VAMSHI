const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions


function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
    // let result=[];
    // for(let propertyKey of obj){
    //     result.push(propertyKey);
    // }
    // return result;
  
    let result=[];
    for(let propertyKey in obj){
      if(typeof obj[propertyKey]!=='function')
        result.push(obj[propertyKey]);
    }
    return result;
  }


  console.log(values(testObject));

  console.log(Object.values(testObject))