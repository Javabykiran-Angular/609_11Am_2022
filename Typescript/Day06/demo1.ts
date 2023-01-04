//Anonymous Functions
// function does not have any name 

    let temp1=function (){
        console.log("First type Anonymous Functions is called ")
    }

    // temp1();

    let kuchbhi=function (a:number,b:number):number{
        return (a+b);
    }

    // let res=kuchbhi(8,2);
    // console.log("Result is "+res);


    // Fat arrow functions/Arrow function 
    // advanced version of Anonymous function

      let temp3=()=>{
            console.log("first type of  Fat arrow functions is called ");
        }

        // temp3();

        let temp4=(a:number,b:number):number=>{
            return (a+b);
        }

        // let res1=temp4(5,5);
        // console.log("Result is "+res1);

       
    //optional parameter functions

    function add1(a:number,b?:number){
        console.log("Value of a is "+a);//8
        console.log("Value of b is "+b);//undefined
        console.log("Addition of a+b is "+(a+b!));//NAN => Not a Number 
    }

    // add1(4,3);
    // add1(8)

    function add2(a?:number,b?:number){
        console.log("Value of a is "+a);//undefined
        console.log("Value of b is "+b);//undefined
        console.log("Addition of a+b is "+(a!+b!));//NAN => Not a Number 
    }
    
    // add2();
    // add2(9);

    function add3(a?:number,b?:number,c?:string){
        console.log("Value of a is "+a);//undefined
        console.log("Value of b is "+b);//undefined
        console.log("Addition of a+b is "+(a!+b!));//NAN => Not a Number 
    }


    // default parameter functions

    function add4(a:number,b:number=8){
        console.log("Value of a is "+a);//10
        console.log("Value of b is "+b);//8
        console.log("Addition of a+b is "+(a+b));//18
    }

        // add4(10)

        // add4(10,20)

        function add5(a:number=10,b?:number){
            console.log("Value of a is "+a);//10
            console.log("Value of b is "+b);//8
            console.log("Addition of a+b is "+(a+b!));//18
        }

        // add5(40,5)
        add5(50);
        





    


