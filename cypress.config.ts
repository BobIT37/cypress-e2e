import { defineConfig } from "cypress";
import { omit } from "cypress/types/lodash";
//--------- Verify download import --------
const { isFileExist, findFiles } = require("cy-verify-downloads");

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      //--------- Verify download import --------
      on("task", { isFileExist, findFiles });
      //-------------
    },
    env: {
      demoVar: "Hello from the Cypress.Config.Ts",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      //https://www.globalsqa.com/angularjs-protractor-practice-site/
      Angular: "https://www.globalsqa.com",

      //Mobile validation
      mobileViewportWidthBreakpoint: 400,
    },
    experimentalSessionAndOrigin: true,
  },
  pageLoadTimeout: 6000, //default timeout to load page
  viewportHeight: 1000,
  viewportWidth: 1400,
});
