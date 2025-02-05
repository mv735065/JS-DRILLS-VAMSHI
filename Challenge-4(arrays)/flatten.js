
const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements) {
  // Flattens a nested array (the nesting can be to any depth).
  // Hint: You can solve this using recursion.
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

  let result=[];
  
  for(let i=0;i<elements.length;i++){
    let element=elements[i];
    if(Array.isArray(element)){
      let array=flatten(element);
      result=result.concat(array);
    }
    else{
      result.push(element);
    }
  }
  return result;

}


console.log(flatten(nestedArray));