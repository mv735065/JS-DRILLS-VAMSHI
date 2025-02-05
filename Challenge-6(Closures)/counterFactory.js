function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
    let counter=0;
    return {
      get increment(){
       counter++;
       return counter;
      },
      decrement:function(){
       counter=counter-1;
       return counter;
  
      }
    }
  }

  let inner=counterFactory();
  console.log(inner.increment);
  console.log(inner.increment);
  console.log(inner.decrement());
  console.log(inner.increment);



