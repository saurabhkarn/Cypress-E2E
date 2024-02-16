
describe("API Automation using Cypress",()=>{
    it("Get Users",()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
        })
    })

    it("Get Single User",()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users/6319146",
            headers:{
                Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(6319146)
        })
    })

    it("Get Single User invalid end point",()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/usersX/6319146",
            headers:{
                Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
            },
            failOnStatusCode:false
            
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(404)
           
        })
    })

    it.only("Get Single User invalid user",()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users/12344444",
            headers:{
                Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
            },
            failOnStatusCode:false
            
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(404)
           
        })
    })
})