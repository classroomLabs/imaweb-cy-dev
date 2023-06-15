/**
 * Given an already registered and logged user
 *  when visits the home page
 *   should display user menu
 *   should send the token to the server
 */
describe("Given an already registered and logged user", () => {
  const PAGE_URL = "http://localhost:4200/";
  const API_URL = `${Cypress.env("apiUrl")}/activities?state=published`;
  beforeEach(() => {});
  context("when visits the home page", () => {
    beforeEach(() => {
      cy.visit(PAGE_URL);
    });
    it("should display user menu", () => {});
    it("should send the token to the server", () => {});
  });
});

/**
 * Given a secured endpoint returning 401
 *  when the user visits a page calling it
 *   should be redirected to the register page
 */
describe("Given a secured endpoint returning 401", () => {
  const REGISTER_URL = "http://localhost:4200/auth/sign-up";
  const PAGE_URL = "http://localhost:4200/activities/mines";
  const API_URL = `${Cypress.env("apiUrl")}/activities/?userId=`;
  beforeEach(() => {});
  context("when the user visits a page calling it", () => {
    beforeEach(() => {
      cy.visit(PAGE_URL);
    });
    it("should be redirected to the register page", () => {});
  });
});
