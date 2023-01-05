//Array Basics
//array is growable & shrinkable dynamicaly 
//array is hetrogenous as well as homogenous
//u can create blan array as well 

let a:number[]=[2,3,4,6];
let a1:string[]=[];
let a2:any[]=[2.5,'Sumit',true];
let a3=[2.5,6,8];
let a4=[4,'sumit',8]
a4[3]='Raokhande';
// let a5=[];
let a5:(number|boolean)[]=[];

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

    // function display(str:string,...item:number[]){
    //     // console.log(str);
    //     // console.log(item);
    //     console.log(str+" "+item);
    // }
    //     display('Sumit',10,45,30,6);










