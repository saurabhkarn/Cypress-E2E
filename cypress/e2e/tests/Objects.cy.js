describe("JavaScript Objects",()=>{

    it("Object",()=>{
        //All JavaScript values, except primitives, are objects.
        let person={
            firstName:"John",
            lastName:"Abr",
            age:30

        }
        //The named values, in JavaScript objects, are called properties.
        cy.log(person.firstName,person.lastName,person.age)
    })

    //An object method is an object property containing a function definition.
    it("Object method",()=>{
        let person={
            firstName:"Saurabh",
            lastName:"Kumar",
            fullname:function(){
                return this.firstName+" "+this.lastName ;
            }

        }
        cy.log(person.fullname())
    })
    // There are different ways to create new objects:

    // Create a single object, using an object literal.
    // Create a single object, with the keyword new.
    // Define an object constructor, and then create objects of the constructed type.
    // Create an object using Object.create().
   it("Object creation Using an Object Literal",()=>{
        const person = {
         firstName:"John",
         lastName:"Doe",
         age:50,
         eyeColor:"blue"};
         //Spaces and line breaks are not important. An object definition can span multiple lines:
        cy.log(person.firstName,person.lastName,person.age,person.eyeColor)
    })
    it("Object creation Using the JavaScript Keyword new",()=>{

        const person=new Object();
        person.firstName="Saurabh",
        person.lastName="Kumar",
        person.age=30,
        person.eyeColor="brown"
        cy.log(person.firstName,person.lastName,person.age,person.eyeColor)
    })
    //Objects are mutable: They are addressed by reference, not by value.

    //The block of code inside of the for...in loop will be executed once for each property.
    it("JavaScript for...in Loop",()=>{
        const person = {
            fname:" John",
            lname:" Doe",
            age: 25
        };
        let txt='';
          
        for (let x in person) {
            txt += person[x];
            if(txt===" John Doe"){
                cy.log(txt)
            }
        }
        cy.log(txt)

    })

    it("deleting/adding a property",()=>{
        const person = {
            firstName: "John",
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
          };
          //The delete keyword deletes both the value of the property and the property itself.
          delete person.age;
          //You can add new properties to an existing object by simply giving it a value
          person.age="40"
          cy.log(person.firstName,person.lastName,person.age,person.eyeColor)
    })

    it("Nested Objects",()=>{
        //Values in an object can be another object

        const myObj={
            name:"Saurabh",
            age:30,
            cars:{
               car1:"BMW",
               car2:"Audi",
               car3:"Alto 800"
            }
        }

        cy.log(myObj.cars.car3)
        cy.log(myObj.cars["car2"])
        cy.log(myObj["cars"]["car1"])
    })

    it("Nested Arrays and Objects",()=>{
        //Values in objects can be arrays, and values in arrays can be objects:

        const myObj = {
            name: "John",
            age: 30,
            cars: [
              {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
              {name:"BMW", models:["320", "X3", "X5"]},
              {name:"Fiat", models:["500", "Panda"]}
            ]
        }
        let x=''
        for(let i in myObj.cars){
           x+= myObj.cars[i].name+" "
           for(let j in myObj.cars[i].models)
            x+=myObj.cars[i].models[j]+" "
            
        }
        cy.log(x)
    })
  //All property have a name ,value and other attributes are: enumerable, configurable, and writable.

// Some common solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()

        it("Displaying the Object properties as a string",()=>{

          const person={
          firstName:"Avyaan",
          lastName:"Atharv",
          age:1.7,
          eyeColor:"Black"
          }

          cy.log(person.firstName+" "+person.lastName+" "+person.age+" "+person.eyeColor)
        })

        it("Displaying the Object in a Loop",()=>{
          const person={
          firstName:"Akshita",
          lastName:"Vaibhav",
           age:7,
            eyeColor:"Black"
         }
       let text="";
       //The properties of an object can be collected in a loop:
       for(let x in person){
        text+=person[x]+" ";
        }
         cy.log(text)
    })

    it("Using Object.values()",()=>{
        const person={
            Name:"saurabh",
            age:30,
            lastName:"Kumar"
        }
        const myArr=Object.values(person);
        cy.log(myArr)
    })

    it("Using JSON.stringify()",()=>{

        const person={
            Name:"saurabh 1111",
            age:30,
            lastName:"Kumar"
        }
        //Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
        let myString=JSON.stringify(person)
        cy.log(myString)
    })

    //JSON.stringify converts dates into strings:
    //JSON.stringify will not stringify functions:This can be "fixed" if 
    //you convert the functions into strings before stringifying
    it("Stringify Functions",()=>{

        const person={
            Name:"Vaibhav",
            age:function (){return 30;}
        };
       person.age=person.age.toString();
        let myString= JSON.stringify(person)
        cy.log(myString)

    })

    it("Stringify Arrays",()=>{

        const arr=[12,13,14,15,16,17,"Hi","Hello","Huh"];
        let myString=JSON.stringify(arr)
        cy.log(myString)
    })

    it("JavaScript Getter (The get Keyword)",()=>{

        const person={
            Name:"Saurabh",
            Address:"Muzaffarpur",
            Language:"JavaScript",
            get Langu(){
                return this.Language;
            }
        }

        cy.log(person.Langu)
    })

    it.only("JavaScript Setter (The set Keyword)",()=>{
        const person={
            Name:"Saurabh",
            Address:"Muzaffarpur",
            Phone:"",
            set mob(ph){
                this.Phone=ph;
            }
        }
        person.mob="Samsung s24";
        cy.log(person.Phone)


    })

    it("Using the lang property, in this example, stores an upper case value in the language property:",()=>{

        const person={
            Name:"Saurabh",
            Address:"Muzaffarpur",
            Language:"",
            set lang(lang){
                this.Language=lang.toUpperCase();
            }
        }
        person.lang="javascrIpT";
        cy.log(person.Language)

    })
    //JavaScript Object Constructors
    //In a constructor function this does not have a value. It is a substitute for the new object.
    // The value of this will become the new object when a new object is created.


// JavaScript has built-in constructors for native objects:

// new String()    // A new String object
// new Number()    // A new Number object
// new Boolean()   // A new Boolean object
// new Object()    // A new Object object
// new Array()     // A new Array object
// new RegExp()    // A new RegExp object
// new Function()  // A new Function object
// new Date()      // A new Date object

//The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.


//=======================================

// Prototype Inheritance
// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Person objects inherit from Person.prototype
// The Object.prototype is on the top of the prototype inheritance chain:

// Date objects, Array objects, and Person objects inherit from Object.prototype.



      it("Using the prototype Property",()=>{
         function Person(first, last, age, eyecolor) {
          this.firstName = first;
          this.lastName = last;
          this.age = age;
          this.eyeColor = eyecolor;
          }
         //The JavaScript prototype property allows you to add new properties to object constructors:

      
          Person.prototype.nationality = "English";
          const my = new Person("John", "Doe", 50, "blue");
          cy.log(my.nationality)
       })

       it("The JavaScript prototype property also allows you to add new methods to objects constructors:",()=>{
        function Person(first, last, age, eyecolor) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.eyeColor = eyecolor;
          }
          
          Person.prototype.name = function() {
            return this.firstName + " " + this.lastName;
          };
          const my = new Person("John", "Doe", 50, "blue");
          cy.log(my.name())
    })

    // Iterable objects are objects that can be iterated over with for..of.
    // Technically, iterables must implement the Symbol.iterator method.

    it("Iterating Over a String",()=>{
      const str="Hello Saurabh , welcome on board"
      let text=""
      for(const i of str){
        text+=i
        
      }
      cy.log(text)

    })

    it("Iterating Over an Array",()=>{
        let max=-Infinity;
        let min=Infinity;
        for(const x of [12,23,56,23,39,90]){
            
            if(x>max){
                max=x;
            }
            if(x<min){
                min=x
            }
        }
        cy.log("Largest number is "+ max)
        cy.log("Smallest number is "+min)
    })


    // JavaScript Iterators
    // The iterator protocol defines how to produce a sequence of values from an object.
    
    // An object becomes an iterator when it implements a next() method.
    
    // The next() method must return an object with two properties:
    
    // value (the next value)
    // done (true or false)
    // value	The value returned by the iterator
    // (Can be omitted if done is true)
    // done	true if the iterator has completed
    // false if the iterator has produced a new value


    //=================================================================================

    // A JavaScript Set is a collection of unique values.

    // Each value can only occur once in a Set.
    
    // A Set can hold any value of any data type.
    
    // Set Method
    // new Set()	Creates a new Set
    // add()	Adds a new element to the Set
    // delete()	Removes an element from a Set
    // has()	Returns true if a value exists
    // clear()	Removes all elements from a Set
    // forEach()	Invokes a callback for each element
    // values()	Returns an Iterator with all the values in a Set
    // keys()	Same as values()
    // entries()	Returns an Iterator with the [value,value] pairs from a Set
    // Property	Description
    // size	Returns the number elements in a Set

    it("The new Set() Method",()=>{
        //Pass an Array to the new Set() constructor:
        const letters= new Set([12,2,12,3,44,54,56,7,65,23])
        cy.log(letters.size)
    })

    it("Create a Set and add literal values:",()=>{
           // Create a Set
           const letters = new Set();

          // Add Values to the Set
              letters.add("a");
              letters.add("b");
              letters.add("c");
              cy.log(letters)
    })
    it("Create a Set and add variables:",()=>{
        // Create Variables
        const a = "a";
        const b = "b";
        const c = "c";

        // Create a Set
        const letters = new Set();

        // Add Variables to the Set
        letters.add(a);
        letters.add(b);
        letters.add(c);
    })

    it("The forEach() Method",()=>{
        //The forEach() method invokes a function for each Set element:

        // Create a Set
        const letters = new Set(["a","b","c"]);

        // List all entries
        let text = "";
        letters.forEach ((value)=> {
        text += value;
        })
        cy.log(text)
    })


    it("The values() Method",()=>{
        const students=new Set(["Saurabh","Gaurav","Atharv","Avyaan","Vaibhav"]);
        //The values() method returns an Iterator object containing all the values in a Set:
        const myIterator=students.values();
        let text="";

        for(const entry of myIterator){

            text+=entry+" ";

        }
        cy.log(text)
    })

    // The keys() Method
    // A Set has no keys.
    // keys() returns the same as values().
    // This makes Sets compatible with Maps.

    //=======================================================

        // The entries() Method
        // A Set has no keys.
        // entries() returns [value,value] pairs instead of [key,value] pairs.
        // This makes Sets compatible with Maps:
        //For a Set, typeof returns object:
        //For a Set, instanceof Set returns true:

    //================================================================================
        // A Map holds key-value pairs where the keys can be any datatype.

        // A Map remembers the original insertion order of the keys.

        // A Map has a property that represents the size of the map.

        // Map Methods
        // Method	Description
        // new Map()	Creates a new Map object
        // set()	Sets the value for a key in a Map
        // get()	Gets the value for a key in a Map
        // clear()	Removes all the elements from a Map
        // delete()	Removes a Map element specified by a key
        // has()	Returns true if a key exists in a Map
        // forEach()	Invokes a callback for each key/value pair in a Map
        // entries()	Returns an iterator object with the [key, value] pairs in a Map
        // keys()	Returns an iterator object with the keys in a Map
        // values()	Returns an iterator object of the values in a Map
        // Property	Description
        // size	Returns the number of Map elements
            

    it("You can create a Map by passing an Array to the new Map() constructor:",()=>{

        const fruits=new Map([["apple",500],["banana",600],["guava",400]])
       
        cy.log(fruits.get("apple"))
        cy.log(fruits.size)
        //The delete() method removes a Map element:
        cy.log(fruits.delete("guava"))
        //The clear() method removes all the elements from a Map:
        //The has() method returns true if a key exists in a Map:
        cy.log(fruits.has("banana"))
        //Maps are Objects . typeof returns object:
        //instanceof Map returns true:

    })

        // JavaScript Objects vs Maps
        // Differences between JavaScript Objects and Maps:
        // Object	Map
        // Not directly iterable	Directly iterable
        // Do not have a size property	Have a size property
        // Keys must be Strings (or Symbols)	Keys can be any datatype
        // Keys are not well ordered	Keys are ordered by insertion
        // Have default keys	Do not have default keys

        it("Map.forEach()",()=>{

            const students=new Map([["Saurabh",100],["Akshita",90],["Vaibhav",89],["Atharv",90],["Avyaan",93]])

            let text=''
            students.forEach(function(value,key){
                text+=key+'='+value+" ";

            })
            cy.log(text)

        })
        it("Map.entries()",()=>{
            //The entries() method returns an iterator object with the [key,values] in a Map:
            const fruits=new Map([["Grapes",100],["Blue Berry",90],["blackCurrant",89],["Dragon Fruit",90],["Kiwi",93]])
            let text = "";
            for (const x of fruits.entries()) {
            text += x+" ";
            }
            cy.log(text)

        })

        it("Map.keys()",()=>{
            //The keys() method returns an iterator object with the keys in a Map:
            const fruits=new Map([["Grapes",100],["Blue Berry",90],["black Currant",89],["Dragon Fruit",90],["Kiwi",93]])
            let text = "";
            for (const x of fruits.keys()) {
            text += x+" ";
            }
            cy.log(text)
        })


        it("Map.values()",()=>{
            //The values() method returns an iterator object with the values in a Map:
            const fruits=new Map([["Grapes",100],["Blue Berry",90],["black Currant",89],["Dragon Fruit",90],["Kiwi",93]])
            let text = "";
            for (const x of fruits.values()) {
            text += x+" ";
            }
            cy.log(text)
            
        })

        it.only("//You can use the values() method to sum the values in a Map:",()=>{
            const marks=new Map([["Math",99],["English",89],["Hindi",94],["Science",98],["Social Studies",92]])

            let sum=0
            let average=''
            for(const x of marks.values()){
                sum+=x
            }
            cy.log("Total Marks="+sum)
            cy.log("Average Marks="+sum/5)
        })

})