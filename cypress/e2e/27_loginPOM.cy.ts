import { LoginPage } from "../../cypress/pages/Login";
import { ProfilePage } from "../../cypress/pages/Profile";

Cypress.session.clearAllSavedSessions;

describe('Basics', () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    it('Success Login Sceanrio', () => {
        LoginPage.usernameElement.type('bob123456');
        LoginPage.passwordElement.type('Bob123456!');
        LoginPage.loginElement.click();
       // LoginPage.submitLogin("bob123456", "Bob123456!")
        cy.url().should('contain', 'profile');
        ProfilePage.headerElement.should("have.text", "Profile");
        //cy.get(`div[class='main-header']`).should("have.text", "Profile");
        ProfilePage.userElement.should("have.text", "Bob123456");
        //cy.get("#userName-value").should("have.text", "Bob123456");
    });

    it('Wrong Creds Login Sceanrio', () => {
        // cy.get('#userName').type('wrongUser');
        // cy.get('#password').type('wrongUser123456!');
        // cy.get('#login').click();
        LoginPage.submitLogin('wrongUser', 'wrongUser1234567')
        cy.url().should('not.contain', 'profile');
        cy.get("#name").should("have.text", "Invalid username or password!")
        ProfilePage.headerElement.should("have.text", "Login");
    });
});