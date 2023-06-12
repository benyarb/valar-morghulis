describe("The Houses Page", () => {
  it("redirects to the first house", () => {
    cy.visit("/houses");
    cy.url().should("include", "/houses/1");
  });
});

describe("The First Houses Page", () => {
  beforeEach(() => {
    cy.visit("/houses/1");
  });

  it("loads", () => {
    cy.get("h2").contains("Houses");
  });

  it("shows the first house", () => {
    cy.get(".house:first").contains("House Algood");
  });

  it("shows 10 houses", () => {
    cy.get(".house").should("have.length", 10);
  });

  it("navigates to the next page", () => {
    cy.get("#next").click();
    cy.url().should("include", "/houses/2");
  });

  it("does not show previous button", () => {
    cy.get("#previous").should("be.hidden");
  });

  // character tests are probably better in a standalone
  // component test, but i need to wrap this up
  it("shows empty message if no sworn members", () => {
    cy.get(".house:first").contains("This house has no sworn members");
  });

  it("shows sworn members", () => {
    cy.get(".house:nth-child(2)").contains("Sworn Members");
    cy.get(".house:nth-child(2) .character").should(
      "have.length.of.at.least",
      1
    );
  });
});

describe("The Last Houses Page", () => {
  beforeEach(() => {
    cy.visit("/houses/45");
  });

  it("loads", () => {
    cy.get("h2").contains("Houses");
  });

  it("shows the last house", () => {
    cy.get(".house:last").contains("House Yronwood of Yronwood");
  });

  it("does not show next button", () => {
    cy.get("#next").should("be.hidden");
  });

  it("navigates to the previous page", () => {
    cy.get("#previous").click();
    cy.url().should("include", "/houses/44");
  });
});
