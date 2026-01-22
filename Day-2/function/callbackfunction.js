/* learn how they are passsed as arguments to other function

when & why callback function are used ??

callback function is passed as an argument to another function

it is executed at a later time ,often after the completion of a task

*/

function hello(first_name, callback) {
    console.log(first_name);
    callback();
  }
  
  function goodbye() {
    console.log("Goodbye users");
  }
  
  hello("Ritik", goodbye);