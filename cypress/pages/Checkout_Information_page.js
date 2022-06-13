class CheckoutInformation{

    txtFirstName = '[data-test="firstName"]';
    txtLastName = '[data-test="lastName"]';
    txtPostal = '[data-test="postalCode"]';
    btnContinue = '[data-test="continue"]';

    typeFirstName(firstName){
        cy.get(this.txtFirstName).type(firstName);
    }
    typeLastName(lastName){
        cy.get(this.txtLastName).type(lastName);
    }
    typePostal(postal){
        cy.get(this.txtPostal).type(postal);
    }
    clickContinue(){
        cy.get(this.btnContinue).click();
    }
    realizeCheckout(firstName, lastName, postal){
        this.typeFirstName(firstName);
        this.typeLastName(lastName);
        this.typePostal(postal);
        this.clickContinue();
    }
}
 
export default CheckoutInformation;
