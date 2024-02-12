import logInDetail from "C:\\Users\\saurabh\\Desktop\\Cypress-E2E\\cypress\\fixtures\\logIn.json"

Cypress.Commands.add("logInFixture",()=>{
    cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    cy.get("#input-email").type(logInDetail.username)
    cy.get("#input-password").type(logInDetail.password)
    cy.get("input[type='submit']").click()
})
