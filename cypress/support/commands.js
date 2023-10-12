Cypress.Commands.add('getByDataTestId', (dataTestId) => {
    cy.get(`[data-testid=${dataTestId}]`);
});