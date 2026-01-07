// introduced in Es6(2015)
// block scope
// cant redeclared
// can reassigned

{
    let age=24;
    let name="saikat";
    name="xyz";//reassigned
    console.log(age,name)
}
//console.log(age,name);