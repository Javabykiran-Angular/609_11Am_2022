//Array Basics
//array is growable & shrinkable dynamicaly 
//array is hetrogenous as well as homogenous
//u can create blan array as well 
var a = [2, 3, 4, 6];
var a1 = [];
var a2 = [2.5, 'Sumit', true];
var a3 = [2.5, 6, 8];
var a4 = [4, 'sumit', 8];
a4[3] = 'Raokhande';
// let a5=[];
var a5 = [];
// for(let i=0;i<a.length;i++){
//     console.log("Array value is "+a[i])
// }
// console.log(a);
// console.log("Display array using join method "+a.join("#"));
// console.log("Display array using join method "+a.join(" "));
// console.log("Display array using join method "+a.join());
// console.log("Display array using join method "+a.join("\n"));
//foreach loop
// a2.forEach((myvalue,i)=>{
//     console.log(myvalue+" Index  is "+i);
// });
// a.forEach((myvalue,j,kuchbhi)=>{
//     console.log(`
//         Myvalue => ${myvalue}  whose index is ${j}  and array is  ${kuchbhi}
//     `)
// })
//rest parameter functions
// function display(...item:number[]){
//         console.log(item);
// }
// display(45,66,88);
// display(45,66,88,100,40,531);
function display(str) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    // console.log(str);
    // console.log(item);
    console.log(str + " " + item);
}
display('Sumit', 10, 45, 30, 6);
