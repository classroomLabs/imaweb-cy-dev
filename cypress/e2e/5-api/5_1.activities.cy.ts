describe("My API tests", () => {
  const API_URL = `${Cypress.env("apiUrl")}/activities`;
  it.skip("should return a list of activities", () => {
    // Act
    cy.request("GET", API_URL).then((response) => {
      // Assert
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.greaterThan(0);
    });
  });

  it("should create a new activity", () => {
    let newId = 0;
    const newActivity = {
      title: "Visit the Titanic in a submarine",
      slug: "visit-the-titanic-in-a-submarine",
      location: "North Atlantic Ocean",
      country: "USA",
      countryCode: "us",
      date: "2025-01-15",
      price: 250000,
      currency: "USD",
      description: "#### Visit the Titanic in a submarine\n Experience the **adrenaline** in this _natural wonder_.",
      capacity: 5,
      quorum: 3,
      ageCategory: "adult",
      state: "published",
      userId: 1,
    };
    // Act
    cy.request("POST", API_URL, newActivity).then((response) => {
      // Assert
      expect(response.status).to.eq(201);
      expect(response.body.title).to.equal(newActivity.title);
      expect(response.body.id).to.be.a("number");
      expect(response.body.id).to.equal(16);
      // After
      newId = response.body.id;
      const options = {
        method: "DELETE",
        url: `${API_URL}/${newId}`,
        headers: {
          Authorization: `Bearer xxx.xxx.xxx`,
        },
      };
      cy.request(options)
        .as("deleteAfter")
        .then((response) => {
          cy.log(`Activity ${newId} deleted`, response);
        });
    });
  });
});
