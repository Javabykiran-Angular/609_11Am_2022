//Push & pop
// LIFO => last in First out Principle
// stack,linkedlist
// to add data dynamically in array 
// drawback => u can add data at the last & data can be poped at the first 
var a = [];
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
var a1 = [10, 45, 86];
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
var str = ['Core Java', 'Advanced Java', 'Spring Boot', 'JSP', 'Angular 12', 'Jenking', 'AWS', 'Docker'];
var arrtemp = str.slice(1, str.length - 2);
console.log(" Original array => \n                ".concat(str, "\n "));
console.log(" Copied array => \n                ".concat(arrtemp, "\n "));
var arrtemp1 = str.slice(1);
console.log(" Copied array => \n ".concat(str, "\n"));
var arrtemp2 = str.slice();
console.log(" Copied array => \n ".concat(arrtemp2, "\n"));
console.log("Array is \n        ".concat(str.slice(2), "\n"));
