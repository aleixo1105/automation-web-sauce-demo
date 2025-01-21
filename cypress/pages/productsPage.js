class ProductsPage {

  validateGridLayout() {
    cy.get('.inventory_list').should('have.css', 'display', 'flex');
  }
  
  // Método para validar visibilidade e formato do nome
  validateProductNameVisibility() {
    cy.get('.inventory_item_name').each(($name) => {
      
      // Verifica se o nome não está vazio e se está visível
      cy.wrap($name)
        .should('be.visible')
        .should('not.be.empty');
    });
  }

  // Método para validar visibilidade e formato da descrição
  validateProductDescriptionVisibility() {
    cy.get('.inventory_item_desc').each(($desc) => {
      
      // Verifica se a descrição não está vazia e se está visível
      cy.wrap($desc)
        .should('be.visible')
        .should('not.be.empty');
    });
  }

  // Método para validar visibilidade e formato do preço
  validatePriceVisibility() {
    cy.get('.inventory_item_price').each(($price) => {
      
      // Garante que o preço esteja visível e no formato correto "$xx.xx"
      cy.wrap($price)
        .should('be.visible')
        .should('not.be.empty')
        .invoke('text')
        .then((priceText) => {
          const cleanedPrice = priceText.trim(); // Remove espaços extras
          expect(cleanedPrice).to.match(/^\$\d+(\.\d{2})$/); // Garante o formato "$xx.xx"
        });
    });
  }

  validateProductImageVisibility() {
    cy.get('.inventory_item_img img').each(($item) => {
      cy.wrap($item)
        .should('be.visible') // Verifica se a imagem está visível
        .should('have.attr', 'src').and('not.be.empty'); // Garante que o atributo src da imagem não está vazio
    });
  }

  validateAddToCartButtonVisibility() {
    cy.get('.btn_inventory').each(($item) => {
      cy.wrap($item)
        .should('be.visible') // Verifica se o botão está visível
        .should('not.be.empty'); // Verifica se o botão não está vazio
    });
  }

} 
 



export default new ProductsPage();
