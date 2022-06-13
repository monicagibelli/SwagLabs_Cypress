class CartPage{
 
    btnAdd = '[data-test="add-to-cart-sauce-labs-backpack"]';
    btnAddCart = '.shopping_cart_link';
    lblProducts = '.title';
    lblProductsInformation = '.cart_item_label';
    btnCheckout = '[data-test="checkout"]';

    verifyProducts(should){
        cy.get(this.lblProducts).should(should);
    }
    verifyProductsInformation(should){
        cy.get(this.lblProductsInformation).should(should);
    }
    clickAdd(){
        cy.get(this.btnAdd).click();
    }
    clickCart(){
        cy.get(this.btnAddCart).click();
    }
    clickCheckout(){
        cy.get(this.btnCheckout).click();
    }
    verifyIfExistProductInformation(){
        this.verifyProductsInformation("be.exist");
    }
    addToCart(){
        this.clickAdd();
    }
    selectCart(){
        this.clickCart();
    }
    selectCheckout(){
        this.clickCheckout();
    }

    shoppingCart(){
        this.addToCart(),
        this.selectCart(),
        this.verifyIfExistProductInformation(),
        this.selectCheckout();
    }
    
}
 
export default CartPage;
