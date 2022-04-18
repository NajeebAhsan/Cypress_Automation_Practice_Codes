describe('My Practise Test', () => {
    it('Verify the URL Positive test', () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq', 'Google')
        })

  })