import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProductsPage from '../../pages/productsPage'; 

import LoginPage from '../../pages/loginPage'; 


Given('I am logged in with valid credentials', function() {
  LoginPage.performLogin();
});

When("I access the products page", function() {
  ProductsPage.validateProductsPage();
});

When('Should ensure that the products layout is structured in a grid', function() {
  ProductsPage.validateGridLayout();
});

When('Should ensure that all product names are visible', function() {
  ProductsPage.validateProductNameVisibility();
});

When('Should ensure that all product descriptions are visible', function() {
  ProductsPage.validateProductDescriptionVisibility();
});

When('Should ensure that all prices are visible', function() {
  ProductsPage.validatePriceVisibility();
});

When('Should ensure that all product images are visible', function() {
  ProductsPage.validateProductImageVisibility();
});

When('Should ensure that all add to cart buttons are visible', function() {
  ProductsPage.validateAddToCartButtonVisibility();
});

When('I access Product Description via image', function() {
  ProductsPage.accessProductDescriptionByImage();
});

When('I access Product Description via name', function() {
  ProductsPage.accessProductDescriptionByImage();
});