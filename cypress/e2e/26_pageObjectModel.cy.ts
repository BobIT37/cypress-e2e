Cypress.session.clearAllSavedSessions;

describe('Basics', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    });

    it('Success Login Sceanrio', () => {
        cy.get('#userName').type('bob123456');
        cy.get('#password').type('Bob123456!');
        cy.get('#login').click();
        cy.url().should('contain', 'profile');
        cy.get(`div[class='main-header']`).should("have.text", "Profile");
        cy.get("#userName-value").should("have.text", "Bob123456");
    });

    it('Wrong Creds Login Sceanrio', () => {
        cy.get('#userName').type('wrongUser');
        cy.get('#password').type('wrongUser123456!');
        cy.get('#login').click();
        cy.url().should('not.contain', 'profile');
        cy.get("#name").should("have.text", "Invalid username or password!")
        cy.get(`div[class='main-header']`).should("have.text", "Login");
    });
});