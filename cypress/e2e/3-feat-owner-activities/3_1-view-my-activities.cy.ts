// import { getUserAccessToken } from "../../support/utils";

import { MyActivitiesPage } from "../../support/pages/my-activities.page";
import { getMyActivitiesUrl, getUserActivities } from "../../support/utils";

describe("Given an activity owner", () => {
  const PAGE = new MyActivitiesPage();
  let myActivities: any[] = [];
  beforeEach(() => {
    cy.login();
    cy.fixture("activities").then((fixtureContent) => {
      const URL_API_MY_ACTIVITIES = getMyActivitiesUrl();
      myActivities = getUserActivities(fixtureContent);
      cy.intercept("GET", URL_API_MY_ACTIVITIES, {
        body: myActivities,
      }).as("getMyActivities");
    });
  });
  context("When visiting the activities mines page", () => {
    beforeEach(() => {
      PAGE.visit();
      cy.wait("@getMyActivities");
    });
    it("Then should see its own activities on any state", () => {
      PAGE.getActivityItems().should("have.length", myActivities.length);
    });
    it("Then should see activities name as a summary", () => {
      PAGE.getActivityItemSummaries().should("have.length", myActivities.length);
    });
    context("When selecting an activity", () => {
      beforeEach(() => {
        PAGE.getActivityItemSummaries().first().click();
      });
      it("Then should toggle details article", () => {
        PAGE.getActivityItemDetails().first().should("be.visible");
      });
      context("When changing an activity state", () => {
        const API_URL = "http://localhost:3000/activities/";
        beforeEach(() => {
          cy.intercept("PUT", API_URL + myActivities[0].id).as("putActivity");
          PAGE.clickChangeFirstState();
        });
        it("Then should send a request to the API", () => {
          cy.wait("@putActivity").then((interception) => {
            const activity = interception.request.body;
            expect(activity.state).to.equal("draft");
          });
        });
      });
    });
  });
  after(() => {
    cy.logout();
  });
});
