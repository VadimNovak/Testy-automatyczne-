const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rdseh2',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
