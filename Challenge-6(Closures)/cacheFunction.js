function cacheFunction(cb) {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);

    if (cache[key]) {
      return cache;
    }

    let result = cb(...args);
    cache[key] = result;
    return result;
  };
}

let inner=cacheFunction((...args)=>{
  return args.reduce((sum,item)=>sum+item,0);
});

console.log(inner(1,2,3))
console.log(inner(1,2,3,4))

console.log(inner(1,2,3,4,5))


console.log(inner(1,2,3))

