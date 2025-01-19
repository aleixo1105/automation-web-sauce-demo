import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/loginPage';

Given('I am on the login page', () => {
  LoginPage.visit();
});

When('I enter valid credentials', () => {
  LoginPage.enterUsername(Cypress.env('VALID_USERNAME'));
  LoginPage.enterPassword(Cypress.env('VALID_PASSWORD'));
});

When('I enter invalid credentials', () => {
  LoginPage.enterUsername('invalid_user');
  LoginPage.enterPassword('invalid_password');
});

When('I click on the login button', () => {
  LoginPage.clickLoginButton();
});

Then('I should be redirected to the products page', () => {
  cy.url().should('include', '/inventory.html');
  
});

Then('I should see an error message', () => {
  LoginPage.getErrorMessage().should('be.visible');
});
 