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
  let firstActivity: any = null;
  let firstSlug = "";
  context("when the page is loaded with the published activities", () => {
    beforeEach(() => {
      cy.visit(PAGE_URL);
      cy.fixture("activities")
        .then((fixture) => {
          const activities = fixture as unknown as any[];
          publishedActivities = activities.filter((a) => a.state == "published");
          activitiesCounter = publishedActivities.length;
          firstActivity = publishedActivities[0];
          firstSlug = firstActivity.slug;
          cy.intercept("GET", API_URL, {
            body: publishedActivities,
          }).as("getActivities");
        })
        .as("fixtureLoaded");
      cy.get(`main[name="${Cypress.env("listName")}"]`)
        .find("div")
        .first()
        .as("firstItem");
      cy.get("@firstItem").children('[name="title"]').as("firstTitle");
    });
    it("then should show the number of activities", () => {
      cy.get("[name='items-count']").should("contain.text", activitiesCounter);
      cy.get("[name='activity-item']").should("have.length", activitiesCounter);
    });
    it("then should have a link to the activity page", () => {
      cy.get("@firstTitle").children("a").should("have.attr", "href", `/activities/${firstSlug}`);
    });
    it("then should list in a monospace font", () => {
      cy.get("@firstTitle").should("have.css", "font-family", "monospace");
    });
    it.only("then should show activities date", () => {
      const firstDate = firstActivity.date;
      const expectedDate = new Date(firstDate).toLocaleDateString();
      cy.get("@firstItem")
        .find("time")
        .then((timeElement) => {
          const printedDate = timeElement.text();
          const actualDate = new Date(printedDate).toLocaleDateString();
          expect(actualDate).to.equal(expectedDate);
        });
    });
    it.only("then should show activities year", () => {
      const firstDate = firstActivity.date;
      const expectedDate = new Date(firstDate);
      const expectYear = expectedDate.getFullYear();
      cy.get("@firstItem").find("time").invoke("text");
    });
  });
});
