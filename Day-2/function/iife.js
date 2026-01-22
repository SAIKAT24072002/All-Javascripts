/*
understaanding iife and how it works
learn about self invoking or self- executing functions
IIFE= immediately invoked function expression
  
This functions do not require an explicit call  to  run

secret is not accessible outside the iife

a function  that is defined and executed immediately after its declaration
*/



(function(){
    console.log("this is an iife function can be executed only once in a life time ");
    
})();




/*summary :---
A function executed immediately after definition
self-executing:-runs once and cant be invoked again 

helps limit scope and avoid polluiting the global scope 



*/