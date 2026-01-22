// if an argument is provided , it overrides the default value 
// if no  arguments is given , js use  the default parameter 



function multiply(a,b=2){
    console.log(a*b);
    
}
multiply(5);
multiply(5,3);
