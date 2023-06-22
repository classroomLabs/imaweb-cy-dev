/**
 * Given an activity owner
 *  When visiting the activities mines page
 *   Then should see its own activities on any state
 *   Then should see activities name as a summary
 *   When selecting an activity
 *    Then should toggle details article
 *   When changing an activity state
 *    Then should send a PUT request to the API
 */

describe("Given an activity owner", () => {
  const URL_MY_ACTIVITIES = "/activities/mines";
  const URL_API_MY_ACTIVITIES = "http://localhost:3000/activities/?userId=";
  beforeEach(() => {});
  context("When visiting the activities mines page", () => {
    beforeEach(() => {
      cy.visit(URL_MY_ACTIVITIES);
    });
    it("Then should see its own activities on any state", () => {});
    it("Then should see activities name as a summary", () => {});
    context("When selecting an activity", () => {
      beforeEach(() => {});
      it("Then should toggle details article", () => {});
      context("When changing an activity state", () => {
        beforeEach(() => {});
        it("Then should send a request to the API", () => {});
      });
    });
  });
  after(() => {});
});
