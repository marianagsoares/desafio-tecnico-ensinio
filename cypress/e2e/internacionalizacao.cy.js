describe('Internacionalização', () => {
  beforeEach(() => {
    cy.visit('https://desafio-ensinio.vercel.app/');
  });

  it('CT02: Modificar idioma da tela institucional para inglês', () => {
      cy.getByDataTestId('languageselect-label').should('be.visible');

      cy.getByDataTestId('languageselect-label').trigger('mouseover');
      
      cy.getByDataTestId('languageselect-item').contains('EN').click();
      
      cy.contains('All in one platform'); 
  });
});