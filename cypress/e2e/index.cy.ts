describe("The Index Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads", () => {
    cy.get("h2").contains("Hello, Planetos!");
  });

  it("navigates", () => {
    cy.get('a[href*="houses/1"]').click();
    cy.url().should("include", "/houses/1");
  });
});
