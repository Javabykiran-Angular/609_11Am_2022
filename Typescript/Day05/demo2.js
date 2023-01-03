// add1();
//Basic user defined functions types 
// 1 function without paramtere & without return type
// 2 function with paramtere & without return type
// 3 function without paramtere & with return type
// 4 function with paramtere & with return type
// 1 function without paramtere & without return type
function add1() {
    console.log("U r in first type function");
}
// 2 function with paramtere & without return type
function add2(a, b) {
    console.log("Addition is " + (a + b));
}
//    add2(5,6);
// 3 function without paramtere & with return type
function add3() {
    return (5 + 5);
}
//    let res= add3();
//    console.log("Result is "+res)
// 4 function with paramtere & with return type
function add4(a, b) {
    return (a + b);
}
var temp = add4(7, 3);
console.log("Addition is " + temp);
