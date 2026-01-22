/* what  is a high order function ??

accepts another function(callback) as a parameter 

executes the callback function inside its body ,  or returns a function

A high order function accepts or returns functions as arguments

It allows greater flexibility,modularity and reusability

examples:- setTimeOut , setInterval , addEventListener and more


*/

// setTimeOut is high order function

setTimeout(function () {
  console.log("Hello after 5 sec");
}, 5000);

// 1 sec = 1000 milliseconds
