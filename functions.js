//functions
function first_func()
{
    console.log("hello this is my first function");
}
first_func();
//function stored in a variable
var  my_name= function hello()
{
    console.log("Alisha")
}
my_name();
//anonymous function
const my_any=function ()
{
    console.log("I am an Anonymous Function")
}
my_any()

//arrow function
hello=()=>{
    console.log("Hi, I am an arror function")
}
hello();
//shorter arrow
let hi="";
hi = () => "I am an arrow function.Even, more shorter";
console.log(hi());