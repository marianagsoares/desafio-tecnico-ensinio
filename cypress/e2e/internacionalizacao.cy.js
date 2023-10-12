describe("Internacionalização", () => {
  beforeEach(() => {
    cy.visit("https://desafio-ensinio.vercel.app/");
  });

  it("CT01: Modificar idioma da tela institucional para português", () => {
    cy.getByDataTestId("languageselect-label").should("be.visible");
    cy.getByDataTestId("languageselect-label").trigger("mouseover");

    cy.getByDataTestId("languageselect-item").contains("PT").click();

    cy.contains("Tudo em uma plataforma");
  });

  it("CT02: Modificar idioma da tela institucional para inglês", () => {
    cy.getByDataTestId("languageselect-label").should("be.visible");
    cy.getByDataTestId("languageselect-label").trigger("mouseover");

    cy.getByDataTestId("languageselect-item").contains("EN").click();

    cy.contains("All in one platform");
  });

  it("CT03: Modificar idioma da tela institucional para espanhol", () => {
    cy.getByDataTestId("languageselect-label").should("be.visible");
    cy.getByDataTestId("languageselect-label").trigger("mouseover");

    cy.getByDataTestId("languageselect-item").contains("ES").click();

    cy.contains("Todo en una plataforma");
  });
});
