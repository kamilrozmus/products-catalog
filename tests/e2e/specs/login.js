// https://docs.cypress.io/api/introduction/api.html

describe("Login view", () => {
  it("Visits login page", () => {
    cy.visit("/login");
    cy.contains("h1", "This is login page");
  });
});
