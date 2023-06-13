/**
 * Given the list of activities at the Home page
 *  when click on a home page activity link
 *    then should navigate the activity detail page
 */
describe("Given the list of activities at the Home page", () => {
  const PAGE_URL = "/";
  const API_URL = `${Cypress.env("apiUrl")}/activities?state=published`;
  const publishedActivities: any[] = [];
  const firstActivity: any = {};
  beforeEach(() => {
    cy.visit(PAGE_URL);
  });
  context("when click on a home page activity link", () => {
    beforeEach(() => {});
    it("then should navigate the activity detail page", () => {});
  });
});

/**
 * Given the detail page of the first activity
 *   then should load the activity information
 *   when data is loaded
 *     then should show an article with activity information
 */
describe("Given the detail page of the first activity", () => {
  const API_URL = `${Cypress.env("apiUrl")}/activities?slug=`;
  const PAGE_URL = "/activities";

  beforeEach(() => {
    cy.fixture("activities").then((activitiesElement) => {});
  });
  it("then should load the activity information", () => {});
  context("when data is loaded", () => {
    beforeEach(() => {});
    it("then should show an article with activity information", () => {});
  });
});
