//Push & pop
// LIFO => last in First out Principle
// stack,linkedlist
// to add data dynamically in array 
// drawback => u can add data at the last & data can be poped at the first 

let a:number[]=[];
// a.push(45);
// console.log(a);
// a.push(78,90,100);
// console.log(a)
// let res=a.pop()
// console.log(a)
// console.log("Poped data is "+res);

//Splice
// to add data dynamically in array 
// u can add data at particular location/index or u can remove a data from particular location/index
 let a1:number[]=[10,45,86];

//  a1.splice(1,0,500);
//  console.log(a1);
//  a1.splice(2,0,400,800,900);
//  console.log(a1);
//  a1.splice(2,1);
//  console.log(a1);
//  a1.splice(1,2);
//  console.log(a1);
//  a1.splice(0,1,700);
//  console.log(a1);
//  a1.splice(1,1,600,2000);
//  console.log(a1);

 //slice
 // It copy a section of data & return a new array

 let str:string[]=['Core Java','Advanced Java','Spring Boot','JSP','Angular 12','Jenking','AWS','Docker'];

 let arrtemp=str.slice(1,str.length-2);
 console.log(` Original array => 
                ${str}
 `)

 console.log(` Copied array => 
                ${arrtemp}
 `)

 let arrtemp1=str.slice(1);
 console.log(` Copied array => 
 ${str}
`)

let arrtemp2=str.slice();
 console.log(` Copied array => 
 ${arrtemp2}
`)
console.log(`Array is 
        ${str.slice(2)}
`)




