const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions


function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert

    let copyObj={};
      for(let key in obj){
        let value=obj[key];
         copyObj[value]=key;
      }
      return copyObj;
  
  
    }

    console.log(invert(testObject))



