class LoginPage {
    visit() {
      cy.visit('/');
    }
    
    checkEmailFields() {
      cy.get('#user-name').should('be.visible').and('be.enabled');
    }

    checkPasswordFields() {
      cy.get('#password').should('be.visible').and('be.enabled');
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

    validateErrorMessage(expectedMessage) {
      this.getErrorMessage()
        .should('be.visible') 
        .and('contain.text', expectedMessage);
    }

    performLogin() {

      cy.visit('/');
      this.enterUsername(Cypress.env('VALID_USERNAME'));
      this.enterPassword(Cypress.env('VALID_PASSWORD'));
      this.clickLoginButton();
    

      cy.url().should('include', '/inventory.html');
    }
  }
  

 

  export default new LoginPage();
   