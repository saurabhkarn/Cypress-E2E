export class RegisterPage{

weblocators={
    firstName:'#input-firstname',
    lastName:"#input-lastname",
    email:"#input-email",
    telephone:"#input-telephone",
    password:"#input-password",
    passwordConfirm:"#input-confirm",
    policyCheckbox:"input[type='checkbox']",
    continue:"[type='submit']"
}


openUrl(){

    cy.visit(Cypress.env('URL'))
  // cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
}
enterFirstName(Fname){
    cy.get(this.weblocators.firstName).type(Fname)
}

enterLastName(Lname){
    cy.get(this.weblocators.lastName).type(Lname)
}

enterEmail(email){
    cy.get(this.weblocators.email).type(email)
}


enterTelephone(Pnumber){
    cy.get(this.weblocators.telephone).type(Pnumber)
}

enterPassword(password){
    cy.get(this.weblocators.password).type(password)
    cy.get(this.weblocators.passwordConfirm).type(password)
}

selectCheckbox(){
    cy.get(this.weblocators.policyCheckbox).check()
}

clickOnContinue(){
    cy.get(this.weblocators.continue).click()
}


}