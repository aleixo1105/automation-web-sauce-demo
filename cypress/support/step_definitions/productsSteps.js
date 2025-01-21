import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProductsPage from '../../pages/productsPage'; // Importando a instância de productsPage

import LoginPage from '../../pages/loginPage'; // Importando a instância de productsPage


Given('I am logged in with valid credentials', function() {
  LoginPage.performLogin(); // Chama a função de login reutilizável
});

When('Should ensure that the products layout is structured in a grid', function() {
  ProductsPage.validateGridLayout();
});

// Step Definition para verificar visibilidade e formato do nome
When('Should ensure that all product names are visible', function() {
  ProductsPage.validateProductNameVisibility();
});

// Step Definition para verificar visibilidade da descrição
When('Should ensure that all product descriptions are visible', function() {
  ProductsPage.validateProductDescriptionVisibility();
});

// Step Definition para verificar visibilidade e formato do preço
When('Should ensure that all prices are visible', function() {
  ProductsPage.validatePriceVisibility();
});

When('Should ensure that all product images are visible', function() {
  ProductsPage.validateProductImageVisibility();
});

// Step Definition para verificar visibilidade do botão de adicionar ao carrinho
When('Should ensure that all add to cart buttons are visible', function() {
  ProductsPage.validateAddToCartButtonVisibility();
});

