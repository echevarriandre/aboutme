// https://docs.cypress.io/api/introduction/api.html

describe("Access Landing Page", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h3", "André Echevarria");
  });
});
