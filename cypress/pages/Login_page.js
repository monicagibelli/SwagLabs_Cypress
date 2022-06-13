class LoginPage{
    //Seletores ou Elementos
    txtUsername = '[data-test="username"]';
    txtPassword = '[data-test="password"]';
    btnLogin = '[data-test="login-button"]';
    lblError = '[data-test="error"]';
    btnPrimaryHeader = '#react-burger-menu-btn';
    btnLogout = '#logout_sidebar_link';


    //Ações
    typeUsername(username){
        cy.get(this.txtUsername).type(username);
    }
    typePassword(password){
        cy.get(this.txtPassword).type(password);
    }
    clickLogin(){
        cy.get(this.btnLogin).click();
    }
    assertErrorShould(type, value){
        cy.get(this.lblError).should(type,value);
    }
    assertErrorContains(text){
        cy.get(this.lblError).contains(text);
    }
    clickPrimaryHeader(){
        cy.get(this.btnPrimaryHeader).click();
    }
    clickLogout(){
        cy.get(this.btnLogout).click();
    }


    //Funcionalidades
    realizeLogin(username, password){
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }
    realizeLogout(){
        this.clickPrimaryHeader();
        this.clickLogout();
    }
}


export default LoginPage;