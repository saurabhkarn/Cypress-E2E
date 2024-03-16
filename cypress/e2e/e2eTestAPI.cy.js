            describe("API Automation in Cypress",()=>{
                it("using custom command",()=>{
                    let payload={
                        "name":"AB Test 02",
                        "email":"Anshita111@dispostable.com",
                        "gender":"female",
                        "status":"active"
                    }
                    //you should pass the arguments in the same order
                    cy.postAPI(payload).then((response)=>{
                        expect(response.status).to.be.equal(201)
                        let userId=response.body.id
                        cy.getAPI(userId).then((response)=>{
                        expect(response.status).to.be.equal(200)})
                         cy.putAPI(userId).then((response)=>{
                        expect(response.status).to.be.equal(200)})
                        cy.deleteAPI(userId).then((response)=>{
                        expect(response.status).to.be.equal(204)})
                    })
                })
        })
