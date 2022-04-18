describe('Cypress Custom Commands', function() {

    it('Login Test', function()  
    {
        //Custome Command usage
        cy.login('admin@yourstore.com','admin')
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

    })

    it('Add Customer Test', function()  
    {
        cy.login('admin@yourstore.com','admin')

        cy.log('** Adding Customer **')
    })

    it('Edit Customer Test', function()  
    {
        cy.login('admin@yourstore.com','admin')

        cy.log('** Editing Customer **')
    })
})