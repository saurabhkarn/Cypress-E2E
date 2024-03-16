describe("Writing to a json file",()=>{
    it("write test",()=>{
       // cy.writeFile("SampleFile.json",{name:"Saurabh",Address:"Muzaffarpur"})

       cy.writeFile("SampleFile.json",{Name:"Atharv",Address:"Darbhanga"},{flag:"a+"})

    })

    it.only("reading the file",()=>{
        cy.readFile('SampleFile.json').then((data) => {
            // Validate the data read from the JSON file
          expect(data).to.have.length(3); // Assuming there are 3 items in the array
           expect(data[0]).to.have.property('Name', 'Saurabh');
           expect(data[0]).to.have.property('Address', "Muzaffarpur");
            // Add more assertions as needed
        });

        
    })
})