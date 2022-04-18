describe('Handling backward and forward browser page', () => {
    it('Verifying backward and forward browser page', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.title().should('eq', 'nopCommerce demo store') //eq is an operator means equal

        cy.get(".ico-register").contains('Reg').click()
        cy.title().should('eq', 'nopCommerce demo store. Register')//Now we are in Registeration page

        cy.go('back') //to go back to the previous URL
        cy.title().should('eq', 'nopCommerce demo store') //Home Page

        cy.go('forward') //to go forward to the Register URL
        cy.title().should('eq', 'nopCommerce demo store. Register') //Registeration Page

        cy.go(-1) //another way to go to the Home page or backwards to the home page
        cy.title().should('eq', 'nopCommerce demo store')

        cy.go(1) //another way to go forward to the Register URL
        cy.title().should('eq', 'nopCommerce demo store. Register')

        cy.reload() //to reload the page
    })
})
