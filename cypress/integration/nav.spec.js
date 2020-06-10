
describe('Cypress parallel run example - 1', () => {
  it('should display the title', () => {
    cy.wait(1500)
    cy.visit(`https://www.fluke.com`);
    cy.wait(1500)
    cy.get('h2').contains('Fluke helps keep business and industry running in over 100 countries.');
  });
});