describe("Page Index", () => {
  beforeEach(() => {
    cy.intercept("**/todos*").as("todos");
    cy.visit("index.html");
  });

  it("Load page", () => {
    cy.wait("@todos").its("response.statusCode").should("eq", 200);
  });

  it("Load page and list items", () => {
    cy.wait("@todos").its("response.statusCode").should("eq", 200);
    cy.get("[data-test=list-item]");
  });
});
