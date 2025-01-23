import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pages/loginPage';

Given('I am on the login page', () => {
  LoginPage.visit();
});

When('I check if Email input fields should be visible', () => {
  LoginPage.checkEmailFields();
});

Then('I check if Password input fields should be visible', () => {
  LoginPage.checkPasswordFields();
});

When('I enter valid email', () => {
  LoginPage.enterUsername(Cypress.env('VALID_USERNAME'));
});

When('I enter valid password', () => {
  LoginPage.enterPassword(Cypress.env('VALID_PASSWORD'));
});
 

When('I enter invalid email', () => {
  LoginPage.enterUsername('invalid_user');
});

When('I enter invalid password', () => {
  LoginPage.enterPassword('invalid_password');
});


When('I click on the login button', () => {
  LoginPage.clickLoginButton();
});

Then('I should be redirected to the products page', function() {
  cy.url().should('include', '/inventory.html');
  
});

Then('I should see an error message - Username is required', function() {
  LoginPage.validateErrorMessage("Epic sadface: Username is required");
});
  
Then('I should see an error message - Password is required', function()  {
  LoginPage.validateErrorMessage("Epic sadface: Password is required");
});

Then('I should see an error message - Username and password do not match', function() {
  LoginPage.validateErrorMessage("Epic sadface: Username and password do not match any user in this service");
});
