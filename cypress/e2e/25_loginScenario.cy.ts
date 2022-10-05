Cypress.session.clearAllSavedSessions();

describe("Login Scenario", () => {
    beforeEach(() => {
      cy.session('mySession', () =>{
        cy.visit(`${Cypress.env("demoQA")}/login`);
        cy.get('#userName').type('bob123456');
        cy.get('#password').type('Bob123456!');
        cy.get('#login').click();
        cy.url().should('contain', 'profile');
      })     
    });

    it("Login User created session", () => {
      cy.visit(`${Cypress.env("demoQA")}/login`);
    });
    it("Login User created session", () => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
      });
  });