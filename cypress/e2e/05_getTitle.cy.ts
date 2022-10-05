describe("Basics", () => {
  beforeEach(() => {
    cy.visit("/textinput");
  })
  it("get title from webpage", () => {
    cy.title().then((title) => {
      cy.log(`Printing the URL: ${title}`);
      //assert adding
      expect(title).to.equal('Text Input');
    })
  });
  it("Clicl on text button", () => {
    let inputElement = cy.get(`input#newButtonName`);
    inputElement.type('welcome')
    let buttonElement = cy.get(`button#updatingButton`);
    buttonElement.click()
                 .should('have.text', 'welcome');
  });
});
