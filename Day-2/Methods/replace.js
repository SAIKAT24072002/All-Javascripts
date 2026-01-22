/*

the replace() method is used to replace a part of a  string with another string

it takes  two arguments 

search value:- the substring or regular expression to search for

replacement value:- the string to replace the search value with

*/

let str = "hello,hello,hello";

let newstr = str.replace(/hello/g, "Hey");

console.log(newstr);

let str2 = "Hey people";

let newstr2 = str2.replace("people", "Developers");

console.log(newstr2);
