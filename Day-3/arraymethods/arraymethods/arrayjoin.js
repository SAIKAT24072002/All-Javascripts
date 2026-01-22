/*

the join methods combines an array in to a string

a seperator can be passed as an argument

if no seperator is provided ,elements are joined with a comma by default


array.join(separator)

seperator is optional argument that defines how elements are joined

returns a string representation of an array

*/

let words = ["hello", "world"];
console.log(words.join(""));
console.log(words.join("-"));
console.log(words.join()); // the default separator is a comma when none is provided

let arr = [1, 2, 3, 4];
console.log(arr.join(" "));
console.log(arr.join("-"));
console.log(arr.join("saikat "));
