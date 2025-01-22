class ProductsSortingPage {


  getSortDropdown() {
    return cy.get('[data-test="product-sort-container"]');
  }

  selectSortByNameAscending() {
    this.getSortDropdown().select('az');
  }

  selectSortByNameDescending() {
    this.getSortDropdown().select('za');
  }

  selectSortByPriceLowToHigh() {
    this.getSortDropdown().select('lohi');
  }

  selectSortByPriceHighToLow() {
    this.getSortDropdown().select('hilo');
  }

  getProductPrices() {
    return cy.get('.inventory_item_price').then(($prices) => {
      return [...$prices].map((priceElement) =>
        parseFloat(priceElement.innerText.replace('$', '').trim())
      );
    });
  }

  validatePricesInDescendingOrder() {
    this.getProductPrices().then((prices) => {
      const sortedPrices = [...prices].sort((a, b) => b - a); 
      let i = 0;

      while(i < prices.length){
        cy.log(prices[i]);
        i++;
      } 
      expect(prices).to.deep.equal(sortedPrices); 
    });
  }


  validatePricesInIAscendingOrder() {
    this.getProductPrices().then((prices) => {
      const sortedPrices = [...prices].sort((a, b) => a - b); 
      let i = 0;

      while(i < prices.length){
        cy.log(prices[i]);
        i++;
      } 
      expect(prices).to.deep.equal(sortedPrices); 
    });
  }



  getProductNames() {
    return cy.get('.inventory_item_name').then(($names) => {
      return [...$names].map((nameElement) => nameElement.innerText.trim());
    });
  }


  validateNamesInAscendingOrder() {
    this.getProductNames().then((names) => {
      const sortedNames = [...names].sort((a, b) => a.localeCompare(b)); 
      let i = 0;

      while(i < names.length){
        cy.log(names[i],"and ", sortedNames[i]);
        i++;
      } 
      expect(names).to.deep.equal(sortedNames); 
    });
  }


  validateNamesInDescendingOrder() {
    this.getProductNames().then((names) => {
      const sortedNames = [...names].sort((a, b) => b.localeCompare(a)); 
      let i = 0;

      while(i < names.length){
        cy.log(names[i],"and ", sortedNames[i]);
        i++;
      } 
      expect(names).to.deep.equal(sortedNames); 
    });
  }


  validateDefaultSortByPriceLowToHigh() {
    this.getSortDropdown().should('have.value', 'lohi'); 
  }

} 
 

export default new ProductsSortingPage();
