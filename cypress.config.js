const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
