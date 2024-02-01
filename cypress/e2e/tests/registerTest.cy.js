import { RegisterPage } from "../../pages/registerPage"
import registerData from "../../fixtures/registerData.json"
const registerObj= new RegisterPage()
describe("test automation",()=>{

    it("register flow",()=>{

        registerObj.openUrl()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()

    })
})