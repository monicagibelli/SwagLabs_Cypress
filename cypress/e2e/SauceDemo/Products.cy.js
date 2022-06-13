import LoginPage from "../../pages/Login_page"
import ProductsPage from "../../pages/Products_page";
import ItemCatalogPage from "../../pages/Item_Catalog_page";

var loginPage = new LoginPage();
var productsPage = new ProductsPage();
var itemCatalogPage = new ItemCatalogPage();

describe("Produtos",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
        loginPage.realizeLogin("standard_user","secret_sauce");
    });
    
    it("Visualizando produto selecionado",()=>{
        productsPage.SelectingProduct();
        itemCatalogPage.addItemToCart();
    });

    it("Adicionando 2 itens ao carrinho",()=>{
        productsPage.Adding2Itens();
    });

    it("Removendo item do carrinho", ()=>{
        productsPage.RemovingItem1();
    });

    it("Verificando o valor na vitrine", ()=>{
        productsPage.SelectingProduct();
        itemCatalogPage.VerifyingValueItem();
    });

    it("Verificando o valor na tela do produto", ()=>{
        productsPage.VerifyingValueProductsItem1();
    });

});