describe("",()=>{
    it("function expression",()=>{
        const x=function(a,b)
        {
                return a*b;
        };
        let z=x(5,6)
        cy.log("Value of z is "+z)
    })

    it("Function constructor",()=>{
        
        const myFunction= new Function("a","b", "return a*b")
        cy.log(myFunction(12,12))
        //functions defined using an expression are not hoisted
        cy.log(typeof(myFunction))
    })
    
    it("Self invoking function",()=>{
      
        (function(){
            let a=13,b=10;
            cy.log("Hello World " + a*b)

        })()

    })

    it("Self returned as string",()=>{
      
        function myFunction(a,b){
            return a+b;
        };
        let x=myFunction.toString();
        cy.log(x);

    })

    it("arrow function",()=>{
        
        const x=(a,b)=>a*b;
           
    
        cy.log(x(5,20));
           
        
        //Arrow functions do not have their own this. They are not well suited for defining object methods.
        //Arrow functions are not hoisted. They must be defined before they are used.
    })

    it("function Paramaters",()=>{
       // JavaScript function definitions do not specify data types for parameters.
       //JavaScript functions do not perform type checking on the passed arguments.
       //JavaScript functions do not check the number of arguments received.
      function myFunction(a,b){
        if(b===undefined){
            cy.log("argument for b is not passed")
        }
      }
      myFunction(100)

    })

    it("function Paramaters with default value",()=>{
        //ES6 allows function parameters to have default values.
       function myFunction(a,b=10){
         if(b===undefined){
             cy.log("argument for b is not passed")
         }
         else{
            cy.log(a+b)
         }
       }
       myFunction(100,78)
 
    })

    it("Function rest parameter",()=>{
        //The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
        function myFunction(...nums){
            let sum=0;
            for(let num of nums){
                sum+=num;
            }
            return sum;
        }
        let x=myFunction(1,2,3,4,5,6,7,8,9,10)
        cy.log(x)

    })

    it("Function arguments Object",()=>{
        //JavaScript functions have a built-in object called the arguments object.
        //The argument object contains an array of the arguments used when the function was called (invoked).
        function findMax(){
            let max=-Infinity;
            for(let i=0;i<arguments.length;i++){
                if(arguments[i]>max){
                    max=arguments[i]
                }
            }
            return max;
        }
        let x= findMax(1,2,3,4,5,6,7,8,9,10,1819,81718,18191,9091,111119)
        cy.log(x)

    })
    it("Find minimum in an array",()=>{
        
        function findMin(arr){
            let min=Infinity;
            for(let i=0;i<arr.length;i++){
                if(arr[i]<min){
                    min=arr[i]
                }
            }
            return min;
        }
        const arr=[12,23,3,233,920,459,2728,9092,1]
        let x= findMin(arr)
        cy.log(x)

    })

    it("Invoking a function as a method",()=>{
        //In JavaScript you can define functions as object methods.
        const myObject={
            firstName:"Saurabh",
            lastName:"Kumar",
            fullName:function(){
                return this.firstName+" "+this.lastName;
            }
        }

        cy.log(myObject.fullName());
    })

    it("Invoking a Function with a Function Constructor",()=>{

        function myFunction(arg1,arg2)
        {
             this.firstName=arg1,
             this.lastName=arg2
        }

        const myObj=new myFunction("Saurabh","Kumar");
       cy.log(myObj.firstName);
       cy.log(myObj.lastName);

    })
    

    it("The JavaScript call() Method",()=>{

        //The call() method is a predefined JavaScript method.
        //It can be used to invoke (call) a method with an owner object as an argument (parameter).
        //With call(), an object can use a method belonging to another object.

       const person={
        fullName:function(){
            return this.firstName +'  '+this .lastName;
        }

       }

       const person1={
        firstName:"John",
        lastName:"candy"
       }

       const person2={
        firstName:"Johny",
        lastName:"andyy"
       }

       cy.log(person.fullName.call(person1))

    })



    it("The JavaScript call() Method with arguments",()=>{

        //The call() method is a predefined JavaScript method.
        //It can be used to invoke (call) a method with an owner object as an argument (parameter).
        //With call(), an object can use a method belonging to another object.

       const person={
        fullName:function(city, country){
            return this.firstName +'  '+this .lastName+ " "+city+' '+country;
        }

       }

       const person1={
        firstName:"John",
        lastName:"candy"
       }

       const person2={
        firstName:"Johny",
        lastName:"andyy"
       }

       cy.log(person.fullName.call(person1,"oslo","Norway"))

    })

    it("The JavaScript apply() Method",()=>{

        const person={
            fullName:function(){
                return this.firstName+" "+this.lastName;
            }
        }

        const person1={
            firstName:"Saurabh",
            lastName:"Kumar"
        }

        cy.log(person.fullName.apply(person1))
    })
       
    //The call() method takes arguments separately.
    //The apply() method takes arguments as an array.

    it("The apply() Method with Arguments",()=>{

        const person={
            fullName:function(city,country,pincode){
                return this.firstName+" "+this.lastName+" "+city+" "+country+" "+pincode;
            }
        }

        const person1={
            firstName:"Saurabh",
            lastName:"Kumar"
        }
        //cy.log(person.fullName.apply(person1,["muzaffarpur","India",843113]))
        let x=person.fullName.apply(person1,["muzaffarpur","India",843113])
        cy.log(x)

        cy.log(Math.max(12,29,9191,119,2829,83389))
    })

    it("Find maximum of an array using Math.max()",()=>{
        const arr=[12,29,39,34,89,920,210,2920]

        cy.log(Math.max.apply(0,arr));
        cy.log(Math.max.apply(null,arr));
        cy.log(Math.max.apply("",arr));
        cy.log(Math.max.apply(Math,arr));
    })
    //With the bind() method, an object can borrow a method from another object.

    it("Function Borrowing",()=>{
        //The member object borrows the fullname method from the person object:
        const person = {
            firstName:"John",
            lastName: "Doe",
            fullName: function () {
              return this.firstName + " " + this.lastName;
            }
          }
          
          const member = {
            firstName:"Hege",
            lastName: "Nilsen",
          }
          
          let fullName = person.fullName.bind(member);
          cy.log(fullName())
    })

    //Sometimes the bind() method has to be used to prevent losing this.
     //When a function is used as a callback, this is lost.

     //All functions have access to the global scope.  
     //In fact, in JavaScript, all functions have access to the scope "above" them.
     //A closure is a function having access to the parent scope, even after the parent function has closed.

     it.only("JavaScript closure",()=>{

        const add=(function(){
               let counter=0;
               return function()
               {    counter+=1; 
                    return counter;
               }

        })()

        cy.log(add());
        cy.log(add());
        cy.log(add());
        cy.log(add());
     })
})