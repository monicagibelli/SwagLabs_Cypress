import CartPage from "../../pages/Cart_page"
import LoginPage from "../../pages/Login_page"
import ProductsPage from "../../pages/Products_page";

var cartPage = new CartPage();
var loginPage = new LoginPage();
var productsPage = new ProductsPage();


describe("Funcionalidade do Carrinho",()=>{

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
        loginPage.realizeLogin("standard_user","secret_sauce");
    });

    it("Adicionando 1 item ao carrinho",()=>{
        productsPage.verifyIfExistAdd(),
        cartPage.shoppingCart();
    });

    it("Adicionando 2 itens ao carrinho",()=>{
        cartPage.shoppingCart();
    });

    
});
