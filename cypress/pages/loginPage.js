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
  }
  
  export default new LoginPage();
   