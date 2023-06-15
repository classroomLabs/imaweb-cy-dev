import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    defaultCommandTimeout: 3000,
    video: false,
    trashAssetsBeforeRuns: true,
    screenshotOnRunFailure: false,
    viewportHeight: 768,
    viewportWidth: 1024,
    env: {
      apiUrl: "http://localhost:3000",
      listName: "list-content",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
