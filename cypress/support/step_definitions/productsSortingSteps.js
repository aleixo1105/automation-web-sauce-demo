import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProductsSortingPage from '../../pages/productsSortingPage';


When('I sort products by Name - A to Z', function() {
  ProductsSortingPage.selectSortByNameAscending();
});

When('I sort products by Name - Z to A',function() {
  ProductsSortingPage.selectSortByNameDescending();
});

When('I sort products by Price - low to high', function() {
  ProductsSortingPage.selectSortByPriceLowToHigh();
});

When('I sort products by Price - high to low',function() {
  ProductsSortingPage.selectSortByPriceHighToLow();
});

When('I Check sorting by Price is dedault',function() {
  ProductsSortingPage.validateDefaultSortByPriceLowToHigh();
});
  

Then('The products should be sorted by price in descending order', () => {
  ProductsSortingPage.validatePricesInDescendingOrder();
});

Then('The products should be sorted by price in ascending order', () => {
  ProductsSortingPage.validatePricesInIAscendingOrder();
});

Then('The products should be sorted by name in ascending order', () => {
  ProductsSortingPage.validateNamesInAscendingOrder(); 
});

Then('The products should be sorted by name in descending order', () => {
  ProductsSortingPage.validateNamesInDescendingOrder(); 
});