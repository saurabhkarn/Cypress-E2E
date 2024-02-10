describe("Broken Link Testing",()=>{

    it("test1",()=>{
        let brokenLink=0
        let activeLink=0
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=common/home")
        cy.get("a").each((link,index)=>{
            const href=link.attr("href")

            if(href){
                cy.request({
                    url:href,
                    failOnStatusCode:false
                }).then((response)=>{
                    if(response.status>=400){
                        cy.log(`${index+1} is Broken Link *** ${href}`)
                        brokenLink++
                    }else{
                        cy.log("Active Link")
                        activeLink++
                    }

                })
            }
        }).then((links)=>{
            const totalLink=links.length
            cy.log("Total Links ="+totalLink)
            cy.log("Total broken Links ="+brokenLink)
            cy.log("Total active Links ="+activeLink)
        })
    })
})