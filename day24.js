// Qu. 1  Create a function that take another function as an argument and calls it after 4 seconds (HOF + callback);
// Higher order functions are functions that take functions as arguments and also return a function as a value.

 let newfn = function(fn){
      setTimeout(fn, 4000)
 }

 newfn(function fn(){
      console.log("Hii Mr. Vikram Singh How Are You.");
 });

//  Qu.2  Implement you own version of `map()` as a higher order function

let arr = [1,2,3,4,5,6,7];

 function vap(a, fn){
  let newArr = [];
  for(let i = 0; i < a.length; i++){
    newArr.push(fn(a[i]));
  }
  return newArr;
 }

 console.log(vap(arr, function(value){
  return value+10;
 }));

// Qu. 3 Write a function that uses closures to create a counter.
// we neet to store counter function in a anoter varibale to store the value. 
 function counter(){
    let count = 0;
    return function(){
     count++;
     console.log(count);
    };
  };

  let counterFunction = counter();
  counterFunction();
  counterFunction();

// Qu. 4 Implement a function that limits how many times another function can be called (closures + HOF);
 function limiter(fn, limit){
  let count = 0;
  return function(){
    if(count < limit){
      count++;
      fn();
    }
  }
 }

 let limitFunction = limiter(function(){
  console.log("Hello Vikram");
 }, 3);

 limitFunction();
 limitFunction();
 limitFunction();
 limitFunction();
 limitFunction();
 limitFunction();




