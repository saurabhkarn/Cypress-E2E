    ///<reference types="cypress"/>
    import payload from "C:\\Users\\saurabh\\Desktop\\Cypress-E2E\\cypress\\config\\payload.json"

    describe("POST call in cypress",()=>{
        function generateRandomString(){
            const randomString= Math.random().toString(36).substring(2,10)
            const email=randomString+"@dispostable.com"
            return email
        }
        it("POST Call- Json",()=>{
            let emailAddress=generateRandomString()
            cy.log("EMAIL ADDRESS "+emailAddress)
            cy.request({
                method:"POST",
                url:"https://gorest.co.in/public/v2/users",
                headers:{
                    Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
                },
                body:{
                    "name":"AB Test 01",
                    "email":emailAddress,
                    "gender":"female",
                    "status":"active"
                }
            }).then((response)=>{
                expect(response.status).to.equal(201)
                expect(response.body).has.property("name","AB Test 01")
                expect(response.body).has.property("gender","female")
                expect(response.body).has.property("status","active")
                expect(response.body.id).to.not.be.null
            })
        })

        it("POST Call- Json ,body outside the request",()=>{
            let emailAddress=generateRandomString()
            let payload={
                "name":"AB Test 01",
                "email":emailAddress,
                "gender":"female",
                "status":"active"
            }
            cy.log("EMAIL ADDRESS "+emailAddress)
            cy.request({
                method:"POST",
                url:"https://gorest.co.in/public/v2/users",
                headers:{
                    Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
                },
                body:payload
            }).then((response)=>{
                expect(response.status).to.equal(201)
                expect(response.body).has.property("name","AB Test 01")
                expect(response.body).has.property("gender","female")
                expect(response.body).has.property("status","active")
                expect(response.body.id).to.not.be.null
            })
        })

        it("POST Call- Json ,using fixture",()=>{
        
           cy.fixture("users.json").then((responseObject)=>{

            responseObject.email=generateRandomString()
            cy.log("EMAIL ADDRESS "+responseObject.email)
            cy.request({
                method:"POST",
                url:"https://gorest.co.in/public/v2/users",
                headers:{
                    Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
                },
                body:responseObject
                }).then((response)=>{
                expect(response.status).to.equal(201)
                expect(response.body).has.property("name","AB Test 01")
                expect(response.body).has.property("gender","female")
                expect(response.body).has.property("status","active")
                expect(response.body.id).to.not.be.null
                })

            })
            
        })


        it("POST Call- Json ,using payload",()=>{
            payload.email=generateRandomString()
            cy.request({
                method:"POST",
                url:"https://gorest.co.in/public/v2/users",
                headers:{
                    Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f" },
                body:payload
            }).then((response)=>{
                expect(response.status).to.equal(201)
                expect(response.body).has.property("name","AB Test 01")
                expect(response.body).has.property("gender","female")
                expect(response.body).has.property("status","active")
                expect(response.body.id).to.not.be.null
            let id=response.body.id
            cy.request({
                    method:"GET",
                    url:"https://gorest.co.in/public/v2/users/"+id,
                    headers:{
                        Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f"
                    }
                }).then((response)=>{
                    expect(response.status).to.equal(200)
                    expect(response.body).has.property("name","AB Test 01")
                    expect(response.body).has.property("gender","female")
                    expect(response.body).has.property("status","active")
                    expect(response.body.id).to.not.be.null
                }) }) }) 
                
                
        it("POST Call- Json ,using payload,invalid header",()=>{
                    payload.email=generateRandomString()
                    cy.request({
                        method:"POST",
                        url:"https://gorest.co.in/public/v2/users",
                        headers:{
                            Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78fXXXXXX" },
                        body:payload,
                        failOnStatusCode:false
                    }).then((response)=>{
                        expect(response.status).to.equal(401)
                        
                
                    })
        })
        it("POST Call- Json ,using payload,invalid email",()=>{
            payload.email=null
            cy.request({
                            method:"POST",
                            url:"https://gorest.co.in/public/v2/users",
                            headers:{
                                Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f" },
                            body:payload,
                            failOnStatusCode:false
                        }).then((response)=>{
                            expect(response.status).to.equal(422)
                            
                    
                        })

        })

        it.only("POST Call- Json ,using payload,duplicate email",()=>{
            payload.email="abtest01@dispostable.com"
            cy.request({
                            method:"POST",
                            url:"https://gorest.co.in/public/v2/users",
                            headers:{
                                Authorization:"Bearer fcac78894c9a2c269270ad75fbf2784b91e1c37fe1bb3373993796b6670bc78f" },
                            body:payload,
                            failOnStatusCode:false
                        }).then((response)=>{
                            expect(response.status).to.equal(422)
                            
                    
                        })

        })
                
        
                        
    })