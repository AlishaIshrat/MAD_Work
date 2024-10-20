var name1="Alisha";
var name2="Alisha";

var _name="Alisha";
let age=21;
const gender="female";
function my_name(){
    var another_name="Alisha Ishrat";
    console.log(_name);
    console.log("name inside function", another_name);
}
my_name();
console.log("name outside function");

function Another_Function(){
let my_name2="Alisha Parveen Ishrat";
if (2<3){
    const my_name3="Alisha Parveen Ishratttt";
    console.log("i can access my _name3 here");
    console.log(my_name3);
}
console.log("i can't access my _name3 here");
// console.log(my_name3);
}
Another_Function();
console.log("I can't access my_name3 here");
