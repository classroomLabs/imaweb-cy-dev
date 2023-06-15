/**
 * Given a registered user
 *  When click on the create activity button
 *   Then should navigate to the create activity page
 *
 * Given a registered user on the create activity page
 *  When fill the form with valid data
 *  And click on the create button
 *   Then should send a post request to the API
 *   Then should navigate to the activities list page
 *   And should see the activity created
 */
describe("Given a registered user", () => {
  const API_URL = `${Cypress.env("apiUrl")}/activities`;
  const PAGE_URL = "/activities/new";
  beforeEach(() => {
    cy.visit(PAGE_URL);
  });
  it("When click on the create activity button then should navigate to the create activity page", () => {
    cy.get("form");
  });

  context("When fill the form with valid data", () => {
    beforeEach(() => {});
    it("Then should send a post request to the API", () => {});
    it("Then should navigate to the activities list page", () => {});
  });
});

// To Do: Use Page Object pattern
