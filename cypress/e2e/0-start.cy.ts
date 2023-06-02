describe("The Activity Bookings home page", () => {
  it("should be visible", () => {
    cy.visit("http://localhost:4200");
  });

  it("should have an h1", () => {
    cy.visit("http://localhost:4200");
    cy.get("h1");
  });
});
