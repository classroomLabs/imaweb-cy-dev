import { TOKEN_KEY } from "../../support/commands";

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
  const HOME_URL = `${Cypress.config("baseUrl")}/`;
  const API_URL = `${Cypress.env("apiUrl")}/register`;
  let NEW_USER: any = null;
  before(() => {
    cy.fixture("new-user").then((content) => (NEW_USER = content));
  });
  context("when sends valid new credentials", () => {
    beforeEach(() => {
      // arrange
      cy.intercept("POST", API_URL, {
        statusCode: 201,
        fixture: "token",
      }).as("postRegister");
      // e2e: vaciar o eliminar al usuario que voy crear...
      cy.visit(PAGE_URL);
      cy.get("#username").clear().type(NEW_USER.username);
      cy.get("[type='email']").clear().type(NEW_USER.email);
      cy.get("[type='password']").first().clear().type(NEW_USER.password);
      cy.get("[name='repeatPassword']").clear().type(NEW_USER.password);
      cy.get("form button[type=submit]").click();
    });
    it("should send the form data to the server", () => {
      cy.get("@postRegister").its("request.body").should("deep.equal", NEW_USER);
    });
    it("should store the token in the local storage", () => {
      // arrange
      const userToken = localStorage.getItem(TOKEN_KEY) || "";
      // act
      const actualToken = JSON.parse(userToken);
      // assert
      const expectedToken = {
        accessToken: "xxx.xxx.xxx",
        user: {
          id: 1,
          name: NEW_USER.username,
          email: NEW_USER.email,
        },
      };
      expect(actualToken).to.deep.equal(expectedToken);
    });
    it("should redirect the user to the home page", () => {
      cy.url().should("equal", HOME_URL);
    });
    it("should display user menu", () => {
      cy.get("#user-menu").should("be.visible");
    });
  });

  context.only("when sends invalid new credentials", () => {
    beforeEach(() => {
      // arrange
      cy.intercept("POST", API_URL, {
        statusCode: 400,
        body: "Invalid credentials",
      }).as("postRegister");
      // e2e: crear el usuario antes y repetir proceso....
      cy.visit(PAGE_URL);
      cy.registerUI(NEW_USER.username, NEW_USER.email, NEW_USER.password);
    });
    it("should show the error dialog", () => {
      cy.get("#error-dialog").should("be.visible");
    });
    it("should display anonymous menu", () => {
      cy.get("#anonymous-menu").should("be.visible");
    });
  });
});
