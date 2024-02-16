///<reference types="cypress"/>
import payloadConfig from "C:\\Users\\saurabh\\Desktop\\Cypress-E2E\\cypress\\config\\payloadPutConfig.json"

describe("PUT call in Cypress",()=>{

    it("PUT call using JSON",()=>{
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/6319146",

           headers:{
                Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
            },
            body:{
                name:"Anshita",
                email:"AbTestAPI12@dispostable.com"
            }
        }).then((response)=>{
             expect(response.status).to.equal(200)
             expect(response.body).has.property("name","Anshita")
             expect(response.body).has.property("email","AbTestAPI12@dispostable.com")
            cy.log(JSON.stringify(response))
        })
        
    })

    it("PUT call using JSON from fixture",()=>{
        cy.fixture("payloadPut.json").then((payload)=>{
            cy.request({
                method:"PUT",
                url:"https://gorest.co.in/public/v2/users/6319146",
    
               headers:{
                    Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
                },
                body:payload
            }).then((response)=>{
                 expect(response.status).to.equal(200)
                 expect(response.body).has.property("name","Saurabh")
                 expect(response.body).has.property("email","AbTestAPI12Saurabh@dispostable.com")
                cy.log(JSON.stringify(response))
            })
        })
        
    })
    it.only("PUT call using JSON from outside fixture",()=>{
        
            cy.request({
                method:"PUT",
                url:"https://gorest.co.in/public/v2/users/6319146",
    
               headers:{
                    Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
                },
                body:payloadConfig
            }).then((response)=>{
                 expect(response.status).to.equal(200)
                 expect(response.body).has.property("name","AnshitaSK")
                 expect(response.body).has.property("email","AbTestAPISK@dispostable.com")
                cy.log(JSON.stringify(response))
            })
        
        
    })
})