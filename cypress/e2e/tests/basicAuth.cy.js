describe("Basic Auth",()=>{

    it("test basic auth",()=>{
        //here username and password is required to visit the page
        cy.visit("https://authenticationtest.com/HTTPAuth/",
        { auth:{ username:'user',password:'pass'
            }
        })
        cy.contains('Login Success').should('be.visible')
    })

    it("test basic auth 2",()=>{
        //we can pass the user name and password directly inside the url
        cy.visit("https://user:pass@authenticationtest.com/HTTPAuth/")
        cy.contains('Login Success').should('be.visible')
    })

    //we can create a common command in commands.js file
    it("Test basic auth 3",()=>{
        cy.loginBasicAuth()
        cy.contains('Login Success').should('be.visible')
    }) 

    //create environment variables in cypress.config.js
    it("test basic auth 4",()=>{
        //here username and password is coming from config.js
        cy.visit("https://authenticationtest.com/HTTPAuth/",
        { auth:{ 
            username:Cypress.env('username'),
            password:Cypress.env('password')
            }
        })
        cy.contains('Login Success').should('be.visible')
    })
})