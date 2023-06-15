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
  let NEW_USER: any = null;
  before(() => {
    cy.fixture("new-user").then((content) => (NEW_USER = content));
  });
  context("when sends valid new credentials", () => {
    beforeEach(() => {
      cy.visit(PAGE_URL);
      cy.intercept("POST", API_URL, {
        statusCode: 201,
        fixture: "token",
      }).as("postRegister");
      cy.get("#username").clear().type(NEW_USER.username);
      cy.get("[type='email']").clear().type(NEW_USER.email);
      cy.get("[type='password']").first().clear().type(NEW_USER.password);
      cy.get("[name='repeatPassword']").clear().type(NEW_USER.password);
      cy.get("form button[type=submit]").click();
    });
    it.only("should send the form data to the server", () => {
      cy.get("@postRegister").its("request.body").should("deep.equal", NEW_USER);
    });
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
