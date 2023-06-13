/**
 * Given the Activities list
 *   when the page is loaded with the published activities
 *    then should show the number of activities
 *    then should show activities name, price, and date
 *    then should have a link to the activity page
 *    then should list in a monospace font
 *    then should only show published activities
 */

describe("Given the Activities list", () => {
  const PAGE_URL = "/";
  const API_URL = `${Cypress.env("apiUrl")}/activities?state=published`;

  context("when the page is loaded with the published activities", () => {
    beforeEach(() => {
      cy.visit(PAGE_URL);
    });
    it("then should show the number of activities", () => {});
    it("then should show activities name, price, and date", () => {});
    it("then should have a link to the activity page", () => {});
    it("then should list in a monospace font", () => {});
    it("then should only show published activities", () => {});
  });
});
