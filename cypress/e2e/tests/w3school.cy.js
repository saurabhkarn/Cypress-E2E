describe("W3 SCHOOL",()=>{
    it("testw3school",()=>{
        let val=''

        cy.visit("https://www.google.com/")
       cy.title().then((title)=>
       {
        cy.log("Title="+ title)
       })
       cy.get('.SDkEP').type("chatgpt").should('have.value',"chatgpt")
       cy.get('#Zrbbw > .wM6W7d > span').click()
       
       
      
    })

    it("Testing arrays",()=>{

        const array1=["software Testing","Functional Testing","Automation","Coding","Cypress Automation Testing","Scrum"]

        const filteredArray=array1.filter(item=>item.includes("Testing"))
        for(let i=0;i<array1.length;i++){
            cy.log(array1[i])

        }
        
        cy.log(filteredArray)
        cy.log(filteredArray.length)
    })

    it("testing Arrays",()=>{
        const array = ["software testing", "regression testing", "cypress automation", "coding", "web app testing"];
        const result = [];

        for (let i = 0; i < array.length; i++) {
        let word = '';
        let isTestingWord = false;

        // Loop through each character in the string
        for (let j = 0; j < array[i].length; j++) {
            // If the current character is a space, check if the word found so far is "testing"
            if (array[i][j] === ' ') {
            if (word === 'testing') {
                isTestingWord = true;
                break;
            }
            word = ''; // Reset word
            } else {
            // Build the word character by character
            word += array[i][j];
            }
        }

        // Check if the last word in the string is "testing"
        if (word === 'testing') {
            isTestingWord = true;
        }

        // If the word "testing" is found, add it to the result array
        if (isTestingWord) {
            result.push(array[i]);
        }
        }

        cy.log(result);
    })

    it("reverse the array ",()=>{

        const array1=["hello","How","are","you","Reversed"]

        const array2=[]

        for(let i=array1.length-1;i>=0;i--){
            cy.log(array1[i])
            array2.push(array1[i])
            
        }
       cy.log(JSON.stringify(array2))
    })

    it("Find element in an array",()=>{
        const array=["hello","Saurabh","how","Are","you","Saurabh"]
        //verify that Saurabh is present in the array

        const input=prompt("enter the value")
        var found=false
        var count=0;
        for(let i=0;i<array.length;i++){

            if(array[i]===input){
                found=true
                count++
            }
        }
        if(found){
            cy.log("the array contains the value")
            cy.log("number of times = "+ count)
        }else{
            cy.log("the array doesnot contain the value")
        }
    })

    it("take input from user and store in an array",()=>{
        const myArray=[];
        const input=prompt("enter the array values separated by commas")

        const elements=input.split(',')
        elements.forEach((element)=>{
            myArray.push(element)

        })
        cy.log(JSON.stringify(myArray))

        //remove duplicates from the array
        const uniqueArray=[]
        myArray.forEach((item)=>{

            if(!uniqueArray.includes(item)){
                uniqueArray.push(item)

            }
        })
        cy.log(JSON.stringify(uniqueArray))

    })


    it("write a code to check if any new entry is there in the array",()=>{

        const oldArray=[]
        const input=prompt("enter the array values separated by commas")
        const elements=input.split(',')
        elements.forEach((element)=>{
            oldArray.push(element)
        })
        cy.log(JSON.stringify(oldArray))

        const newArray=[]
        const input2=prompt("enter the array values separated by commas")
        const elements2=input2.split(',')
        elements2.forEach((element)=>{
            newArray.push(element)
        })
        cy.log(JSON.stringify(newArray))

       function findNewEntry(oldList,newList){
        return newList.filter(item=>
            !oldList.includes(item)
        )
       }

       const newItem=findNewEntry(oldArray,newArray)
       if(newItem.length>0){
        cy.log(JSON.stringify(newItem))
       }else{
        cy.log("no new item added")
       }
    })
 

    it.only("find the duplicate value in an array ",()=>{
        const array=[]
        const duplicates=[]
        const values=prompt("enter the values of array separated by comma")
        const elements=values.split(',')
        elements.forEach((element)=>{
            array.push(element)
        })

        for(let i=0;i<array.length;i++){
            for(let j=i+1;j<array.length;j++){
                if(array[i]===array[j]&& !duplicates.includes(array[i])){
                    duplicates.push(array[i])
                    break;
                }
            }
        }
        cy.log(JSON.stringify(duplicates))

        
       
    })
})