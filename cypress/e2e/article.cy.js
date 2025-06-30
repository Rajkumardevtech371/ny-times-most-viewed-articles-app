describe('NY Times Most Viewed Articles App', () => {
    it('loads homepage and opens an article modal', () => {
      cy.visit('http://localhost:3000');
  
      // Wait for articles to load
      cy.get('[data-testid^="article-card"]').should('have.length.greaterThan', 0);
  
      // Click the first article
      cy.get('[data-testid^="article-card"]').first().click();
  
      // Modal should appear
      cy.get('[data-testid="article-detail-modal"]').should('be.visible');
  
      // Close modal
      cy.get('[data-testid="close-modal-btn"]').click();
  
      // Modal should disappear
      cy.get('[data-testid="article-detail-modal"]').should('not.exist');
    });
  });
  