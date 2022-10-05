import { Runnable } from "mocha";

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
})