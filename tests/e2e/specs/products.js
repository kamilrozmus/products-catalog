// https://docs.cypress.io/api/introduction/api.html

describe("Products view", () => {
  it("Visits products page", () => {
    cy.visit("/");
    cy.contains("h1", "This is products page");
  });
});
