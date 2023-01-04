//Anonymous Functions
// function does not have any name 
var temp1 = function () {
    console.log("First type Anonymous Functions is called ");
};
// temp1();
var kuchbhi = function (a, b) {
    return (a + b);
};
// let res=kuchbhi(8,2);
// console.log("Result is "+res);
// Fat arrow functions/Arrow function 
// advanced version of Anonymous function
var temp3 = function () {
    console.log("first type of  Fat arrow functions is called ");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// let res1=temp4(5,5);
// console.log("Result is "+res1);
//optional parameter functions
function add1(a, b) {
    console.log("Value of a is " + a); //8
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN => Not a Number 
}
// add1(4,3);
// add1(8)
function add2(a, b) {
    console.log("Value of a is " + a); //undefined
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN => Not a Number 
}
// add2();
// add2(9);
function add3(a, b, c) {
    console.log("Value of a is " + a); //undefined
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN => Not a Number 
}
// default parameter functions
function add4(a, b) {
    if (b === void 0) { b = 8; }
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //8
    console.log("Addition of a+b is " + (a + b)); //18
}
// add4(10)
// add4(10,20)
function add5(a, b) {
    if (a === void 0) { a = 10; }
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //8
    console.log("Addition of a+b is " + (a + b)); //18
}
// add5(40,5)
add5(50);
