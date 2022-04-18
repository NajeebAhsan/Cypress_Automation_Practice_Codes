describe('Handling UI Elements', () => {
    it('Verifying the Inputs and Radio buttons', () => {
        cy.visit("https://demo.guru99.com/test/newtours/")
        cy.url().should('include', 'newtours') //verifying URL

        cy.get("[name='userName']").should('be.visible').should('be.enabled').type("mercury")
        cy.get("[name='password']").should('be.visible').should('be.enabled').type("mercury")

        cy.get("[name='submit']").should('be.visible').click()
        cy.wait(5000)
        cy.get("[href='reservation.php']:nth-child(1)").click()

        //verify checked radio button
        cy.get("[value=roundtrip]").should('be.visible').should('be.checked')
        //verify unchecked radio button
        cy.get("[value=oneway]").should('be.visible').should('not.be.checked').click()

        cy.get("[name=findFlights]").should('be.visible').click()
        cy.title().should('eq', 'Find a Flight: Mercury Tours:')
        })
  })