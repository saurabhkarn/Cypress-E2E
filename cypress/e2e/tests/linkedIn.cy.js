

describe("verifying Linked in",()=>{
    it("Test user presence",()=>{

        let expectedText="German Shepherd"
        cy.visit("https://www.google.com/")
        cy.title().then((title)=>{
            cy.log(title)
        })

        cy.get('.FPdoLc > center > .RNmpXc').invoke('text').then((data)=>{


            cy.log(data)
       
        })
        // cy.get('.gLFyf').type("german")

        // cy.get(".wM6W7d").each(($e)=>{
        //     if($e.text()==expectedText){
        //         cy.wrap($e).click()
        // }
       
        // })
    })


    it("Error",()=>{


        try{
            alert("Welcome guest")
        }
        catch(err){
            cy.log(err.message)
        }
    })

    it("Error 2",()=>{


        try
        {
            const fileContent=readFile("farziFile")
            cy.log(fileContent)

            
        }
        catch(err){

            cy.log(err.message)
        }
        finally{
            cy.log("finally moved here")
        }
    })


    it("Error 3",()=>{


        try
        {
            throw new Error("something went wrong")
            cy.log("trying to message you after exception")

            
        }
        catch(err){

            cy.log(err.message)
            cy.log("hello from catch")
        }
        finally{
            cy.log("finally moved here")
        }
    })

    it("Error 3",()=>{
         try
        {
            undefinedFunction();

        }
        catch(err){

            if(err instanceof ReferenceError){
                console.error("reference error caught",err.message);
                cy.log("reference error caught",err.message)
            }
            else{
                console.error("unknown error caught",err.message)
            }
        }
        finally{
            cy.log("finally moved here")
        }
    })


    it.only("error 4",()=>{
        try {
            try {
              // Code that might throw an exception
              throw new Error('Inner exception');
            } catch (err) {
              cy.log('Inner error caught:', err.message);
              // Rethrow the error
              throw err;
            }
          } catch (err) {
            // Handle the outer exception
            cy.log('Outer error caught:', err.message);
          }
    })
    
    it.only("error5",()=>{
        try {
            const result =divide(10, 0);
            cy.log('Result:', result);
          } catch (error) {
            cy.log('Error:', error.name+""+error.message );
          }
    })

    it.only("errors 6",()=>{
        let x = 5;
        try {
        x = y + 1;   // y cannot be used (referenced)
        }
        catch(err) {
        cy.log(err.name +"   "+err.message)
        }
          
        let num = 1;
        try {
        num.toPrecision(500);   // A number cannot have 500 significant digits
        }
        catch(err) {
            cy.log("HI  "+err.name +"   "+err.message)
        }
           
        try {
            eval("alert('Hello)");   // Missing ' will produce an error
          }
          catch(err) {
            cy.log("HI  "+err.name +"   "+err.message)
          }

          7+9;
          "use strict"
          var y=90;
          cy.log(y)
    })
        
})