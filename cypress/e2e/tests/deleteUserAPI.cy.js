///<reference types="cypress"/>

     describe("Delete User API",()=>{
            function generateRandomString(){
                const randomString= Math.random().toString(36).substring(2,10)
                const email=randomString+"@dispostable.com"
                return email
            }
            it("Delete Test ",()=>{
                let emailAddress=generateRandomString()
                let payload={
                    "name":"AB Test 01",
                    "email":emailAddress,
                    "gender":"female",
                    "status":"active"
                }
                cy.request({
                    method:"POST",
                    url:"https://gorest.co.in/public/v2/users",
                    headers:{
                        Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
                    },
                    body:payload
                }).then((response)=>{
                    const userId=response.body.id;
                    cy.log(userId)
                    cy.request({
                        method:"DELETE",
                        url:"https://gorest.co.in/public/v2/users/"+ userId,
                        header:{
                            Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
                        },
                        failOnStatusCode:false
                    }).then((response)=>{
                        expect(response.status).to.be.equal(204)
                    })
                    cy.request({
                            method:"GET",
                            url:"https://gorest.co.in/public/v2/users/"+userId,
                            headers:{
                                Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
                            },
                            failOnStatusCode:false
                        }).then((response)=>{
                            expect(response.status).to.equal(404)
                            

                    })
                })
                    
            })
        })