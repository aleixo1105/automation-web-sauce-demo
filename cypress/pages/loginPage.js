class LoginPage {
    visit() {
      cy.visit('/');
    }
  
    enterUsername(username) {
      cy.get('#user-name').type(username);
    }
  
    enterPassword(password) {
      cy.get('#password').type(password);
    }
  
    clickLoginButton() {
      cy.get('#login-button').click();
    }
  
    getErrorMessage() {
      return cy.get('[data-test="error"]');
    }

    performLogin() {
      // Realiza o login
      cy.visit('/');
      this.enterUsername(Cypress.env('VALID_USERNAME'));
      this.enterPassword(Cypress.env('VALID_PASSWORD'));
      this.clickLoginButton();
    
      // Verifica se foi redirecionado para a página de produtos
      cy.url().should('include', '/inventory.html');
    }
  }
  



  export default new LoginPage();
   