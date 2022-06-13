import CartPage from "../../pages/Cart_page";
import LoginPage from "../../pages/Login_page"
import CheckoutInformation from "../../pages/Checkout_Information_page";
import CheckoutOverview from "../../pages/Checkout_Overview_page";

var loginPage = new LoginPage();
var cartPage = new CartPage();
var checkoutInformation = new CheckoutInformation();
var checkoutOverview = new CheckoutOverview();

describe("Checkout",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
        loginPage.realizeLogin("standard_user","secret_sauce");
        cartPage.shoppingCart();
    });
    
    it("Cadastro e Compra finalizada",()=>{
        checkoutInformation.realizeCheckout("Monica","Gibelli","14801029");
        checkoutOverview.realizeFinish();
    });
});