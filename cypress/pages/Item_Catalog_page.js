class ItemCatalogPage{
   
    lblItemName = '.inventory_details_name';
    lblItemDetails = '.inventory_details_desc';
    lblItemPrice = '.inventory_details_price';
    lblItemAdd = '[data-test="add-to-cart-sauce-labs-backpack"]';
    btnBack = '[data-test="back-to-products"]';
    btnCart = '.shopping_cart_link';
    lblValueItem = '.inventory_details_desc_container';
    lblValueItem29 = '.inventory_details_price';
    
    verifyValueItem(){
        cy.get(this.lblValueItem).find(this.lblValueItem29).invoke("text").then((element)=>{
            cy.log(element);
        })
    }
    verifyItemName(should){
        cy.get(this.lblItemName).should(should);
    }
    verifyItemDetails(should){
        cy.get(this.lblItemDetails).should(should);
    }
    verifyItemPrice(should){
        cy.get(this.lblItemPrice).should(should);
    }
    clickItemAdd(){
        cy.get(this.lblItemAdd).click();
    }
    clickItemBack(){
        cy.get(this.btnBack).click();
    }
    verifyIfExistName(){
        this.verifyItemName("be.exist");
    }
    verifyIfExistDetails(){
        this.verifyItemDetails("be.exist");
    }
    verifyIfExistPrice(){
        this.verifyItemPrice("be.exist");
    }
    verifyIfExistValueItem(){
        this.verifyValueItem("be.exist");
    }

    addItemToCart(){
        this.verifyIfExistName(),
        this.verifyIfExistDetails(),
        this.verifyIfExistPrice(),
        this.clickItemAdd();
    }        
    
    VerifyingValueItem(){
        this.verifyIfExistValueItem();
    }
}
     
export default ItemCatalogPage;
