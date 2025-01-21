import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProductsFilterbyPage from '../../pages/productsFilterbyPage';


When('I sort products by Name - A to Z', function() {
  ProductsFilterbyPage.selectSortByNameAscending();
});

When('I sort products by Name - Z to A',function() {
  ProductsFilterbyPage.selectSortByNameDescending();
});

When('I sort products by Price - low to high', function() {
  ProductsFilterbyPage.selectSortByPriceLowToHigh();
});

When('I sort products by Price - high to low',function() {
  ProductsFilterbyPage.selectSortByPriceHighToLow();
});
 

Then('The products should be sorted by price in descending order', () => {
  ProductsFilterbyPage.validatePricesInDescendingOrder();
});

Then('The products should be sorted by price in ascending order', () => {
  ProductsFilterbyPage.validatePricesInIAscendingOrder();
});

Then('The products should be sorted by name in ascending order', () => {
  ProductsFilterbyPage.validateNamesInAscendingOrder(); 
});

Then('The products should be sorted by name in descending order', () => {
  ProductsFilterbyPage.validateNamesInDescendingOrder(); 
});