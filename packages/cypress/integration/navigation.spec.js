describe('Navigation', function () {
  context('Navigate from page to page', () => {
    it(`Navigating to the About page`, () => {
      cy.visit('http://localhost:3000');
      cy.get('[href="/about"]').click();
      cy.get('h1').should('be.visible').contains('The LEGO History')
    });
  });
});
