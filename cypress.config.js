const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://127.0.0.1:8080",
    retries: {
      runMode: 2,
      openMode: 2,
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    supportFile: false,
    video: false,
    screenshotOnRunFailure: false,
  },
});
