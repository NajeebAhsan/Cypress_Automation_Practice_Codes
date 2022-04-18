describe('Cypress Hooks', function() {

    before(() => {
        // root-level hook
        // runs once before all tests
        cy.log('*** Setup Block ***')
      })
      
      beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.log('*** Login Block ***')
      })
      
      afterEach(() => {
        // runs after each test block
        cy.log('*** Logout Block ***')
      })
      
      after(() => {
        // runs once all tests are done
        cy.log('*** Tear Down Block ***')
      })

    it('First Search', function()  {
        cy.log('*** First Search ***')
    })

    it('Advanced Search', function()  {
        cy.log('*** Advanced Search ***')
    })

    it('Listing Products', function()  {
        cy.log('*** Listing Products ***')
    })
})