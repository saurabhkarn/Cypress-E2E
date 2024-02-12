// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginBasicAuth',()=>{
    cy.visit("https://authenticationtest.com/HTTPAuth/",
        { auth:{ 
            username:'user',
            password:'pass'
            }
        })
        
})

Cypress.Commands.add("logIn",()=>{
    cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    cy.get("#input-email").type("cypressdemo@dispostable.com")
    cy.get("#input-password").type("Cypress123!!")
    cy.get("input[type='submit']").click()
})

Cypress.Commands.add("logInParam",(email,password)=>{
    cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    cy.get("#input-email").type(email)
    cy.get("#input-password").type(password)
    cy.get("input[type='submit']").click()
})

// import logInDetail from "C:\\Users\\saurabh\\Desktop\\Cypress-E2E\\cypress\\fixtures\\logIn.json"

// Cypress.Commands.add("logInFixture",()=>{
//     cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
//     cy.get("#input-email").type(logInDetail.username)
//     cy.get("#input-password").type(logInDetail.password)
//     cy.get("input[type='submit']").click()
// })

