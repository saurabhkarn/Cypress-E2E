//JavaScript Classes are templates for JavaScript Objects.
describe("Javascript Class",()=>{
    it("creating a class",()=>{
     //A JavaScript class is not an object. It is a template for JavaScript objects.
     class Car{
        constructor(name,year){
            this.name=name;
            this.year=year
        }
        //The constructor method is called automatically when a new object is created.
     }
     const myCar1 = new Car("Ford", 2014);
     const myCar2=new Car("BMW",2024);
     cy.log(myCar1.name)
     cy.log(myCar2.name,myCar2.year)


    })

    it("creating a class with a method",()=>{
        //A JavaScript class is not an object. It is a template for JavaScript objects.
        class Student{
           constructor(name,year){
               this.name=name;
               this.year=year
           }
           
           age(){
            const age=new Date();
            return age.getFullYear()-this.year;
           }
        }
        const myStudent1 = new Student("Saurabh",1985);
        
        cy.log(myStudent1.name,myStudent1.age())
        
   })
   //To create a class inheritance, use the extends keyword.
   //A class created with a class inheritance inherits all the methods from another class:
   it("Inheritance in Javascript",()=>{

    class Car {
        constructor(brand) {
          this.carname = brand;
        }
        present() {
          return 'I have a ' + this.carname;
        }
      }
      
      class Model extends Car {
        constructor(brand, mod) {
          super(brand);
          this.model = mod;
        }
        //The super() method refers to the parent class.
        //By calling the super() method in the constructor method, 
        //we call the parent's constructor method and gets access to the parent's properties and methods.
        show() {
          return this.present() + ', it is a ' + this.model;
        }
      }
      
      let myCar = new Model("Ford", "Mustang");
      cy.log(myCar.carname,myCar.model)
      cy.log(myCar.show())
   })
   //even if the getter is a method, you do not use parentheses when you want to get the property value.
   //To use a setter, use the same syntax as when you set a property value, without parentheses:

   it("Using Getter and Setter",()=>{

    class Car {
        constructor(brand) {
          this._carname = brand;
        }
        get carname() {///getter
          return this._carname;
        }
        set carname(x) {//setter
          this._carname = x;
        }
      }
      
      const myCar = new Car("Ford");
      cy.log(myCar.carname);
      myCar.carname = "Volvo";//setter
      cy.log(myCar.carname);//getter

   })
   //Hoisting
    //Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
    //That means that you must declare a class before you can use it:


    //Static class methods are defined on the class itself.
    //You cannot call a static method on an object, only on an object class.

    it.only("Static in javascript",()=>{
        class Car{
            constructor(name){
                this.name=name;
            }
          static hello(x){
            cy.log("hello "+x.name)
          }
        }

        const myCar=new Car("Mercedese")
       // cy.log(myCar.hello());
        Car.hello(myCar);

    })
})