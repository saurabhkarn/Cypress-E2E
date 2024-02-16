///<reference types="cypress"/>
describe("Delete API",()=>{

    it("Test1",()=>{

        cy.request({
            method:"DELETE",
            url:"https://gorest.co.in/public/v2/users/6449974",
            header:{
                Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
            },
            failOnStatusCode:false
        }).then((response)=>{
            expect(response.status).to.be.equal(204)
        })
    })
})