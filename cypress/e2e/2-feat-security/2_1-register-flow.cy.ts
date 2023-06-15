/**
 * Given a user at registration flow
 *  when sends valid new credentials
 *    should send the form data to the server
 *    should store the token in the local storage
 *    should redirect the user to the home page
 *    should display user menu
 *  when sends invalid new credentials
 *    should show an error dialog
 *    should display anonymous menu
 */
describe("Given a user at registration flow", () => {
  const PAGE_URL = "/auth/sign-up";
  const API_URL = `${Cypress.env("apiUrl")}/register`;

  before(() => {});
  context("when sends valid new credentials", () => {
    beforeEach(() => {
      cy.visit(PAGE_URL);
    });
    it("should send the form data to the server", () => {});
    it("should store the token in the local storage", () => {});
    it("should redirect the user to the home page", () => {});
    it("should display user menu", () => {});
  });

  context("when sends invalid new credentials", () => {
    beforeEach(() => {
      cy.visit(PAGE_URL);
    });
    it("should show the error dialog", () => {});
    it("should display anonymous menu", () => {});
  });
});
