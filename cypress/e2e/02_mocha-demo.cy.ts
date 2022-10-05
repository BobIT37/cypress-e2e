describe('Sample Test Suite', () => { // decsribe is test suite
  before(() => {
    cy.log('hello from the before hook');
  })
  after(() => {
    cy.log('hello from the before after');
  });
  beforeEach(() => {
    cy.log('hello from the before each hook');
  });
  afterEach(() => {
    cy.log('hello from the after each hook');
  })
  it('Test #1', () => {
    cy.log('hello world');
  });
  it('Test #2', () => {
    cy.log('hello world');
  });
  it.only('Test #3', () => { //only
    cy.log('hello world');
  });
  it.skip('Test #4', () => { //skip
    cy.log('hello world');
  });
});