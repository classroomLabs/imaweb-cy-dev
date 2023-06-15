/**
 * Given the Published Activities list
 *   when the Home page is loaded
 *    then should show the number of activities
 *    then should have a link to the activity page
 *    then should list in a monospace font
 *    then should show activities name, price, and date
 */

describe("Given the Activities list", () => {
  const PAGE_URL = "/";
  const API_URL = `${Cypress.env("apiUrl")}/activities?state=published`;
  let publishedActivities: any[] = [];
  let activitiesCounter = 0;
  let firstSlug = "";
  context("when the page is loaded with the published activities", () => {
    beforeEach(() => {
      cy.visit(PAGE_URL);
      cy.fixture("activities").then((fixture) => {
        const activities = fixture as unknown as any[];
        publishedActivities = activities.filter((a) => a.state == "published");
        activitiesCounter = publishedActivities.length;
        firstSlug = publishedActivities[0].slug;
        cy.intercept("GET", API_URL, {
          body: publishedActivities,
        });
      });
    });
    it("then should show the number of activities", () => {
      cy.get("[name='items-count']").should("contain.text", activitiesCounter);
      cy.get("[name='activity-item']").should("have.length", activitiesCounter);
    });
    it("then should have a link to the activity page", () => {
      cy.get('main[name="list-content"]')
        .find("div")
        .first()
        .children('[name="title"]')
        .children("a")
        .should("have.attr", "href", `/activities/${firstSlug}`);
    });
    it("then should list in a monospace font", () => {});
    it("then should show activities date", () => {});
  });
});
