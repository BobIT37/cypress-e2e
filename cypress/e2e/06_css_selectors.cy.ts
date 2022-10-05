describe('Locators', () => {
  beforeEach(() => {
    cy.visit('/dynamicid');
  });
  it('cy.contains example', () => {
    cy.contains('Button with Dynamic ID').should(
      "have.text", 
      "Button with Dynamic ID");
  });
  it('cy.get and cy.find example', () => {
    cy.get('div').find('button').should(
      "have.text", 
      "Button with Dynamic ID");
  });
  it('css selector with attribute', () => {
    cy.get(`button[class='btn btn-primary']`).should(
      "have.text", 
      "Button with Dynamic ID");
  });
  it("Css selector using a class", () => {
    cy.get(`.btn-primary`).should("have.text", "Button with Dynamic ID");
  });
});
