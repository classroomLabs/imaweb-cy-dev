/**
 * The Activity Bookings navigation links
 *   should have a link to the repository page
 *   should have a header link with 'sign-up' text
 *   should navigate to the sign-up page
 */

describe("The Activity Bookings navigation links", () => {
  const repoUrl = "https://github.com/AlbertoBasalo/ng-dev";
  const signUpUrl = "http://localhost:4200/auth/sign-up";
  let signUp = "";
  before(() => {
    cy.log("1️⃣ Before ALL");
  });
  beforeEach(() => {
    signUp = "🔏 Sign up";
    cy.log("2️⃣ Before Each " + signUp);
    cy.visit("http://localhost:4200/");
  });
  it("should have a link to the repository page", () => {
    cy.get(`a[href='${repoUrl}']`);
  });
  it("should have a header link with 'sign-up' text", () => {
    cy.get("header a") // Act
      .should("have.text", signUp); // Assert;
  });
  it("should navigate to the sign-up page", () => {
    cy.get("header a").click(); // Arrange
    cy.url() // Act
      .should("eq", signUpUrl); // Assert
  });
  afterEach(() => {
    cy.log("After Each");
  });
  after(() => {
    cy.log("After ALL");
  });
});
