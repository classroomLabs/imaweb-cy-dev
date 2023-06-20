import { TOKEN_KEY } from "../../support/commands";

/**
 * Given an already registered and logged user
 *  when visits the home page
 *   should display user menu
 *   should send the token to the server
 */
describe("Given an already registered and logged user", () => {
  const PAGE_URL = "/";
  const API_URL = `${Cypress.env("apiUrl")}/activities?state=published`;
  beforeEach(() => {
    // const AUTH_URL = "/auth/sign-up";
    // const API_AUTH_URL = `${Cypress.env("apiUrl")}/register`;
    // cy.fixture("new-user").then((NEW_USER) => {
    //   cy.intercept("POST", API_AUTH_URL, {
    //     statusCode: 201,
    //     fixture: "token",
    //   }).as("postRegister");
    //   cy.visit(AUTH_URL);
    //   cy.registerUI(NEW_USER.username, NEW_USER.email, NEW_USER.password);
    // });
    cy.login();
  });
  context("when visits the home page", () => {
    beforeEach(() => {
      cy.intercept("GET", API_URL).as("getActivities");
      cy.visit(PAGE_URL);
    });
    it("should display user menu", () => {
      cy.get("#user-menu").should("be.visible");
    });
    it("should send the token to the server", () => {
      cy.wait("@getActivities");
      const TOKEN = JSON.parse(localStorage.getItem(TOKEN_KEY) || "");
      cy.get("@getActivities").its("request").its("headers").its("authorization").should("contain", TOKEN.accessToken);
    });
    afterEach(() => {
      cy.logout();
    });
  });
});

/**
 * Given a secured endpoint returning 401
 *  when the user visits a page calling it
 *   should be redirected to the register page
 */
describe.only("Given a secured endpoint returning 401", () => {
  const REGISTER_URL = "/auth/sign-up";
  const PAGE_URL = "/activities/mines";
  const API_URL = `${Cypress.env("apiUrl")}/activities/?userId=`;
  beforeEach(() => {
    cy.intercept("GET", API_URL, { statusCode: 401 }).as("getMyActivities");
  });
  context("when the user visits a page calling it", () => {
    beforeEach(() => {
      cy.visit(PAGE_URL);
    });
    it("should be redirected to the register page", () => {
      cy.url().should("contain", REGISTER_URL);
    });
  });
});
