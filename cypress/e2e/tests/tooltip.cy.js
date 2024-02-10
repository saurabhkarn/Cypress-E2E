describe("Test tooltip",()=>{

    it("test",()=>{
        cy.visit("https://practice.expandtesting.com/tooltips")
        cy.get("#btn1").trigger('mouseover')
        cy.get('.tooltip-inner').should('be.visible').and('have.text','Tooltip on top')
    })
    it.only("test2",()=>{

        cy.visit("https://open.spotify.com/")
        cy.get('[aria-label="Collapse Your Library"]').trigger('mouseover')
        cy.get('#hover-or-focus-tooltip').should('be.visible').and('have.text','Collapse Your Library')
    })

})