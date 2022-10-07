import { defineConfig } from "cypress";
import { omit } from "cypress/types/lodash";
//--------- Verify download import --------
const { isFileExist, findFiles } = require("cy-verify-downloads");
//Excel requirements
const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path"); // for file path
//mySQL requirement
const mysql = require("mysql");
//Faker
const { faker } = require("@faker-js/faker");

export default defineConfig({
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      //--------- Verify download import --------
      on("task", { isFileExist, findFiles });
      //-------------
      //Excel implementation
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
      //mySQL Implementation & Faker
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
      });
      //for the mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      //------------
      //Faker
      on("task", {
        freshUser() {
          let user = {
            username: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            registeredAt: faker.date.past(),
            vehicle: faker.vehicle.vehicle(),
          };
          return user;
        },
      });
    },
    env: {
      demoVar: "Hello from the Cypress.Config.Ts",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      //https://www.globalsqa.com/angularjs-protractor-practice-site/
      Angular: "https://www.globalsqa.com",
      db: {
        host: "localhost",
        user: "root",
        password: "",
        database: "cypress_test",
      },
      //Mobile validation
      mobileViewportWidthBreakpoint: 400,
    },
    experimentalSessionAndOrigin: true,
  },
  pageLoadTimeout: 6000, //default timeout to load page
  viewportHeight: 1000,
  viewportWidth: 1200,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Report E2E',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries : { 
    runMode: 2,
    openMode: 1,
  },
  video: true,
  screenshotOnRunFailure: true,
});

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}
