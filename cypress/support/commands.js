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

Cypress.Commands.add("getAPI",(pathParam)=>{
    cy.request({
        method:"GET",
        url:"/"+pathParam,
        header:{Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
    }
    })
})
Cypress.Commands.add("postAPI",(payload)=>{
    cy.request({
        method:"POST",
        url:"/",
        header:{Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
    },
        body:payload
    })
})
Cypress.Commands.add("putAPI",(pathParam,payload)=>{
    cy.request({
        method:"PUT",
        url:"/"+pathParam,
        header:{Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
    },
        body:payload
    })
})
Cypress.Commands.add("deleteAPI",(pathParam)=>{
    cy.request({
        method:"DELETE",
        url:"/"+pathParam,
        header:{Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
    }
        
    })
    
})
