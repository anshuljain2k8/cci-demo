
describe('Failed case', () => {
  it('should display the title', () => {
    cy.wait(1500)
    cy.visit(`https://www.fluke.com`);
    cy.wait(1500)
    cy.get('h2').contains('This should fail');
  });
});