class ProductsPage {

  validateProductsPage() {
    cy.url().should("include", "/inventory.html");
    cy.get('[data-test="title"]').should("be.visible").and("have.text", "Products");

  }

  
  validateGridLayout() {
    cy.get('.inventory_list').should('have.css', 'display', 'flex');
  }

  
  validateProductNameVisibility() {
    cy.get('.inventory_item_name').each(($name) => {
      

      cy.wrap($name)
        .should('be.visible')
        .should('not.be.empty');
    });
  }


  validateProductDescriptionVisibility() {
    cy.get('.inventory_item_desc').each(($desc) => {
      
      cy.wrap($desc)
        .should('be.visible')
        .should('not.be.empty');
    });
  }

  validatePriceVisibility() {
    cy.get('.inventory_item_price').each(($price) => {
      
      cy.wrap($price)
        .should('be.visible')
        .should('not.be.empty')
        .invoke('text')
        .then((priceText) => {
          const cleanedPrice = priceText.trim(); 
          expect(cleanedPrice).to.match(/^\$\d+(\.\d{2})$/); 
        });
    });
  }

  validateProductImageVisibility() {
    cy.get('.inventory_item_img img').each(($item) => {
      cy.wrap($item)
        .should('be.visible') 
        .should('have.attr', 'src').and('not.be.empty'); 
    });
  }

  validateAddToCartButtonVisibility() {
    cy.get('.btn_inventory').each(($item) => {
      cy.wrap($item)
        .should('be.visible') 
        .should('not.be.empty'); 
    });
  }


  accessProductDescriptionByImage() {
    cy.get('[class="inventory_item_img"]').each(($image, index) => {

      cy.get('[class="inventory_item_img"]').eq(index).should('be.visible').click();
      cy.get('[class="inventory_details_desc large_size"]').should('be.visible');  
      cy.get('[id="back-to-products"]').should('be.visible').click();
    });

  }

  accessProductDescriptionByName() {
    cy.get('[class="inventory_item_name"]').each(($image, index) => {

      cy.get('[class="inventory_item_name"]').eq(index).should('be.visible').click();
      cy.get('[class="inventory_details_desc large_size"]').should('be.visible');  
      cy.get('[id="back-to-products"]').should('be.visible').click();
    });

  }


} 
 



export default new ProductsPage();
