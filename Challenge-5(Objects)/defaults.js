const testObject = {  name: "Bruce Wayne", age: undefined, location: "Gotham" }; // use this object to test your functions


function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults

     for(let key in obj){
      if(obj[key]===undefined){
        obj[key]=defaultProps[key];
      }
     }
     return obj;
  }

  let defaultProps=
    {  name: "Bruce Wayne", age: 36, location: "Gotham" };
  
  console.log(defaults(testObject,defaultProps))