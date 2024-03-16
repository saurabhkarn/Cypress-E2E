describe("Javascript asyn functions",()=>{

    // A callback is a function passed as an argument to another function
    // This technique allows a function to call another function
    // A callback function can run after another function has finished
  it("callback funtion example",()=>{

    function orderPizza(callback){
        cy.log("ordering my pizza");
    setTimeout(function(){
            cy.log("pizza is ready");
            callback()
        },.1)
    }

    function eatPizza(){
        cy.log("eating cheesebust chicken-mushroom-paneer-corn Pizza large size, with mojito")
    }

    orderPizza(eatPizza);

  })

  it("Asynchronous function",()=>{
    //In the real world, callbacks are most often used with asynchronous functions.
    //A typical example is JavaScript setTimeout().

        setTimeout(myFunction,.1);

        function myFunction(){
            cy.log("oho waited for 3 seconds !!")
        }
    
    //myFunction();
    })

    it("setInterval()",()=>{
        //When using the JavaScript function setInterval(), 
        //you can specify a callback function to be executed for each interval:

        // Define a function representing the action triggered by the alarm
        function alarmAction() {
            cy.log("Wake up! Time to start your day.");
        }
        
        // Set up the alarm using setInterval
        const alarmInterval = setInterval(alarmAction, .1); // The alarm will go off every 5 seconds (5000 milliseconds)
        
        // After some time, you decide to stop the alarm
        setTimeout(function() {
            clearInterval(alarmInterval); // Stop the alarm (clear the interval)
            cy.log("Alarm turned off. You can sleep peacefully now.");
        }, 1); // Stop the alarm after 20 seconds (20000 milliseconds)
  
    })

    it("setIntervalExample",()=>{
        setInterval(mycallBack,.001)

        function mycallBack(){
            cy.log("Hello")
        }
    })
    
    // asynchronus programmes are difficult to write and difficult to debug.
    // Because of this, most modern asynchronous JavaScript methods don't use callbacks. 
    // Instead, in JavaScript, asynchronous programming is solved using Promises instead.

    //==========================================================================

    // "Producing code" is code that can take some time
    // "Consuming code" is code that must wait for the result
    // A Promise is an Object that links Producing code and Consuming code

    it.only("Promise",()=>{
      function orderPackage() {
    // Create a new promise
       return new Promise((resolve, reject) => {
      // Simulate the process of ordering and delivering the package
       setTimeout(() => {
        const packageStatus = Math.random(); // Randomly determine if the package is delivered successfully or not
        if (packageStatus < 0.9) {
          resolve("Package delivered on time!"); // If successful, fulfill the promise
        } else {
          reject("Package delivery delayed or lost!"); // If unsuccessful, reject the promise
        }
      }, 3000); // Simulate a delay of 3 seconds for processing the order
    });
  }
  
     // Place an order for the package
     orderPackage()
         .then((message) => {
           cy.log("message"); // If the promise is fulfilled (package delivered), log the success message
          })
            .catch((error) => {
            cy.error("error"); // If the promise is rejected (package delayed or lost), log the error message
          });
    })
})    