describe('Logo Test', () => {
  it('Renders correctly', () => {
    cy.visit('/iframe.html?id=atoms-logo--default');

    cy.get('span').queryByText('Travi').should('exist');
  });
});
