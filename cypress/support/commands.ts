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

declare global {
  namespace Cypress {
    interface Chainable {
      registerUI(username: string, email: string, password: string): Chainable<void>;
    }
  }
}
