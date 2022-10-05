describe("Basics", () => {
  beforeEach(() => {
    cy.visit("/textinput");
  })
  it("get URL from webpage", () => {
    cy.url().then((url) => {
      cy.log(`Printing the URL: ${url}`);
      //assert adding
      expect(url).to.contains('/textinput');
    })
  });
  
});
