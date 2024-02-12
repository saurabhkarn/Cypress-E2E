//import logInDetail from "C:\\Users\\saurabh\\Desktop\\Cypress-E2E\\cypress\\fixtures\\logIn.json"
describe("using Custom command ",()=>{

    it("test 1",()=>{
        cy.logIn();
        cy.get('.breadcrumb > :nth-child(3) > a').should('be.visible')
    })
    //if we have multiple test cases where user name and password can change then we can pass the parameters 
    //in the custom command
    
    it("test 2 ,with parameters",()=>{
        cy.logInParam("cypressdemo@dispostable.com","Cypress123!!");
        cy.get('.breadcrumb > :nth-child(3) > a').should('be.visible')
    })

    //If you don’t want to hardcode the data in the test , then you can create a fixture file
    // and pass the data from the fixture file
    it("test 3 ,with fixture file",()=>{
        cy.logInParam(logInDetail.username,logInDetail.password);
        cy.get('.breadcrumb > :nth-child(3) > a').should('be.visible')
    })
//We can pass the fixture file in commands.js as well . In that case we don’t need to pass the data
// as parameters or arguments
    it.only("test 4 ,with fixture file in commands.js",()=>{
        cy.logInFixture();
        cy.get('.breadcrumb > :nth-child(3) > a').should('be.visible')
    })


})