/**
 * The sign-up form
 *     should have a form with 4 inputs and a submit button disabled
 *   when the users fills the form correctly
 *     should allow to submit the form
 *     should mark all inputs as valid
 *   when the user fills the form incorrectly
 *     should disabled the submit button if the form is invalid
 *     should mark the username as invalid if it is empty
 *     should mark the username as invalid after clear it
 *     should not show an error for user before interaction
 *     should show an error for user name while invalid
 *     should mark the username as valid if it is not empty
 *     should mark the email as invalid if it is not an email
 *  when the user resets the form
 *     should clear the form when the reset button is clicked
 */
describe("The sign-up form", () => {
  const signUpUrl = "http://localhost:4200/auth/sign-up";
  beforeEach(() => {
    cy.visit(signUpUrl);
  });
  it("should have a form with 4 inputs and a submit button disabled", () => {
    // cy.get("form");
    const expectedItems = 4;
    cy.get("form input") // Act
      .should("have.length", expectedItems); // Assert
    cy.get("form button[type='submit']") // Act
      .should("be.disabled"); // Assert
  });
  context("when the users fills the form correctly", () => {
    beforeEach(() => {
      // Arrange
      cy.get("#username").clear().type("John");
      cy.get("[type='email']").clear().type("john.doe@acme.com");
      cy.get("[type='password']").first().clear().type("1234a");
      cy.get("[name='repeatPassword']").clear().type("1234a");
    });
    it("should allow to submit the form", () => {
      cy.get("form button[type='submit']") // Act
        .should("be.enabled"); // Assert
    });
  });
});
