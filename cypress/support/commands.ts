/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

export const TOKEN_KEY = "user-access-token";

Cypress.Commands.add("registerUI", (username, email, password) => {
  cy.get("#username").clear().type(username);
  cy.get("[type='email']").clear().type(email);
  cy.get("[type='password']").first().clear().type(password);
  cy.get("[name='repeatPassword']").clear().type(password);
  cy.get("form button[type=submit]").click();
});
Cypress.Commands.add("login", () => {
  cy.fixture("token").then((token) => localStorage.setItem(TOKEN_KEY, JSON.stringify(token)));
});
Cypress.Commands.add("logout", () => {
  // object.property.method(argument);
  // window.localStorage.removeItem(TOKEN_KEY);
  cy.window().its("localStorage").invoke("removeItem", TOKEN_KEY);
});
Cypress.Commands.add("force401", () => {
  cy.intercept("GET", `${Cypress.env("apiUrl")}/**`, { statusCode: 401 }).as("get401");
});
declare global {
  namespace Cypress {
    interface Chainable {
      registerUI(username: string, email: string, password: string): Chainable<void>;
      login(): Chainable<void>;
      logout(): Chainable<void>;
      force401(): Chainable<void>;
    }
  }
}
