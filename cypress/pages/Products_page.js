class ProductsPage{

    lblProducts = '.title';
    lblAdd = '[data-test="add-to-cart-sauce-labs-backpack"]';
    lblItem1 = '#item_4_img_link > .inventory_item_img';
    btnItem1 = '[data-test="add-to-cart-sauce-labs-backpack"]';
    btnRemoveItem1 = '[data-test="remove-sauce-labs-backpack"]';
    btnItem2 = '[data-test="add-to-cart-sauce-labs-bike-light"]';
    btnRemoveItem2 = '[data-test="remove-sauce-labs-bike-light"]';
    lblValueItem1 = ':nth-child(1) > .inventory_item_description';
    lblInventoryItem1 = '.inventory_item_price';
    
    verifyValue(){
        cy.get(this.lblValueItem1).find(this.lblInventoryItem1).invoke("text").then((element)=>{
            cy.log(element);
        })
    }
    verifyProducts(should){
        cy.get(this.lblProducts).should(should);
    }
    verifyAdd(should){
        cy.get(this.lblAdd).should(should);
    }
    verifyItem1(should){
        cy.get(this.lblItem1).should(should);
    }
    clickItem1(){
        cy.get(this.lblItem1).click();
    }
    clickBtnItem1(){
        cy.get(this.btnItem1).click();
    }
    clickBtnItem2(){
        cy.get(this.btnItem2).click();
    }
    clickBtnRemoveItem1(){
        cy.get(this.btnRemoveItem1).click();
    }
    clickBtnRemoveItem2(){
        cy.get(this.btnRemoveItem2).click();
    }
    verifyIfExistProducts(){
        this.verifyProducts("be.exist");
    }
    verifyIfExistAdd(){
        this.verifyAdd("be.exist");
    }
    verifyIfExistItem1(){
        this.verifyItem1("be.exist");
    }
    verifyIfExistValue(){
        this.verifyValue("be.exist");
    }

    SelectingProduct(){
        this.verifyIfExistItem1("be.exist"),
        this.clickItem1();
    }
    Adding2Itens(){
        this.clickBtnItem1(),
        this.clickBtnItem2();
    }
    RemovingItem1(){
        this.clickBtnItem1();
    }
    VerifyingValueProductsItem1(){
        this.verifyIfExistValue();
    }

}

export default ProductsPage;