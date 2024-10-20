// This is an empty array filled data later on
const arr=[];
arr[0]=1;
arr[1]='Alisha';
// This is an array with data
let arr1=['Alisha',2];
console.log(arr1);

//Array with new keyword
let arr3= new Array(1,2,3,4,5,6);
console.log(arr3);
//Array method
// arr3.map((a)=>{
//     onslotchange.log(a);
// })

const names =['Alisha', 'Sarah', 'Zara','Ali'];
let filtered=names.filter((name)=>{
    name!='Alisha'
});
console.log(filtered);