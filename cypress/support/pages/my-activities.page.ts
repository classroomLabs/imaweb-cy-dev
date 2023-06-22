export class MyActivitiesPage {
  private readonly pageUrl = "/activities/mines";
  private readonly itemQ = "details[name='activity-item']";
  visit(): void {
    cy.visit(this.pageUrl);
  }

  getActivityItems(): any {
    return cy.get(this.itemQ);
  }
  getActivityItemSummaries(): any {
    return cy.get(`${this.itemQ} summary`);
  }
  getActivityItemDetails(): any {
    return cy.get(`${this.itemQ} article[name='details']`);
  }
  /**
   *
   */
  clickChangeFirstState(): any {
    const query = "article[name='details'] button[name='change-state-to-draft']";
    cy.get(`${this.itemQ} ${query}`).first().click();
  }
}
