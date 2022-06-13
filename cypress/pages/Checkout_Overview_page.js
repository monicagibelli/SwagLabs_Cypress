class CheckoutOverview{

    lblTotal = '.summary_total_label';
    btnFinish = '[data-test="finish"]';
    lblComplete = '.title';

    verifyTotal(should){
        cy.get(this.lblTotal).should(should);
    }
    clickFinish(){
        cy.get(this.btnFinish).click();
    }
    verifyCheckoutComplete(should){
        cy.get(this.lblComplete).should(should);
    }
    verifyIfExistTotal(){
        this.verifyTotal("be.exist");
    }
    verifyIfExistCheckoutComplete(){
        this.verifyCheckoutComplete("be.exist");
    }
    realizeFinish(){
        this.verifyIfExistTotal(),
        this.clickFinish();
        this.verifyIfExistCheckoutComplete();
    }
}
 
export default CheckoutOverview;
