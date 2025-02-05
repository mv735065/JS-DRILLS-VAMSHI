function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned

  let count = 0;
  return function () {
    count++;
    if (count <= n) {
      return cb(count);
    } else {
      return null;
    }
  };
}

let inner = limitFunctionCallCount((count) => {
  console.log(count);
}, 5);

inner();
inner();
inner();
inner();
inner();
inner();
inner();
