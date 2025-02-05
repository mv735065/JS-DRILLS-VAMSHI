const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

function mapObject(obj, cb) {
    // Like map for arrays, but for objects. 
    // Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
    let newObject={}
      for(let propertyKey in obj){
        let value=obj[propertyKey];
        newObject[propertyKey]=cb(value);
      }
  return newObject;
  
  }



  console.log(
    mapObject(testObject,(value)=>{
    return value+" map";
  })
);
