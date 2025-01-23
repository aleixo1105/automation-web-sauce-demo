import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProductsSortingPage from '../../pages/productsSortingPage';


When('I sort products by Name - A to Z', () => {
  ProductsSortingPage.selectSortByNameAscending();
});

When('I sort products by Name - Z to A', () => {
  ProductsSortingPage.selectSortByNameDescending();
});

When('I sort products by Price - low to high', () => {
  ProductsSortingPage.selectSortByPriceLowToHigh();
});

When('I sort products by Price - high to low', () => {
  ProductsSortingPage.selectSortByPriceHighToLow();
});

When('I Check sorting by Price is default', () => {
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