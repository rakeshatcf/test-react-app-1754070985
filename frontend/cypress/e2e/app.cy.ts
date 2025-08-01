describe('App E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads home page successfully', () => {
    cy.contains('Home Page').should('be.visible');
  });

  it('has correct meta tags', () => {
    cy.get('head meta[name="description"]')
      .should('have.attr', 'content', 'Modern React SPA');
  });

  it('maintains layout structure across navigation', () => {
    cy.get('header').should('be.visible');
    cy.get('main').should('be.visible');
    cy.get('footer').should('be.visible');
  });
});