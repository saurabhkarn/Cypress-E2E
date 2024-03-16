    describe("Codes",()=>{

        it("remove duplicate from an array",()=>{

            let a=null
            let b,c;
            const array=[12,10,12,23,12,34,12,37,12,90,12,98,1287,78,12,12*"arr",a,b,c];
            let res=''
            const uniqueArray = Array.from(new Set(array));
            for(const x in uniqueArray){

                res+=uniqueArray[x]+" "
                
            }
            cy.log(res);
        })

        it("Write a function that reverses a string",()=>{

            let str="hello how are you";
            function reverseString(str){
                return str.split('').reverse().join('')
            }
            cy.log(reverseString(str))
            
        })

        it("Write a function to calculate the factorial of a given number.",()=>{

        function factorial(n){
            if(n===0 || n===1){
                return 1;
            }
            return n* factorial(n-1)
        } 

        cy.log(factorial(10))
        })

        it("Write a function to check if a given string is a palindrome.",()=>{

        const str="racecar"
        const str2="not a palindrom"
        function palindrom(str){

            const reversed=str.split('').reverse().join('')

            return str===reversed;
        }

        cy.log("The give String is a palindrom ? "+palindrom(str) )
        cy.log("The give String is a palindrom ? "+palindrom(str2) )
        })

        it("Write a function to generate the nth Fibonacci number.",()=>{

        })

        it("Write a function to check if two strings are anagrams of each other.",()=>{

        const str1="abcdefgh"
        const str2="cdbahgfeaa"

            function anagram(str1,str2){
                return str1.split('').sort().join('')===str2.split('').sort().join('')
            }

            cy.log("are the strings anagram ?"+anagram(str1,str2))
        })

        it("Palindrom without inbuilt function",()=>{

            function isPalindrom(str){

                str=str.toLowerCase();

                let start=0;
                let end=str.length-1;
                while(start<end){
                    if(str[start]!==str[end]){

                        return false;

                    }
                    start++;
                    end--;
                }
                return true;
            }

            const myString="A123454321ASS"
            cy.log(isPalindrom(myString))
        })



        it.only("reverse a string without inbuilt function",()=>{

            function reverseStr(str){

                let reversed =''
                for(let i= str.length-1;i>=0;i--){

                    reversed+=str[i]
                }

                return reversed
            }

            let mystring="hello world go to universe"
            const reversedString=reverseStr(mystring)
            cy.log(mystring)
            cy.log(reversedString)
        })



        it.only("Fibonacci series without inbuilt function",()=>{

            function findFibonacci(n){

                let fibSeries=[];
                let a=0,b=1;
                if(n>=1){
                    fibSeries.push(a)
                }

                if(n>=2){
                    fibSeries.push(b)
                }

                for(let i=2;i<n;i++){
                    let next=a+b
                    fibSeries.push(next)
                    a=b;
                    b=next;
                }
                return fibSeries;

            }

            const n=10;
            const series= findFibonacci(n)
            cy.log(`Fibnocci series for ${n} is `+ series)
        })
    })