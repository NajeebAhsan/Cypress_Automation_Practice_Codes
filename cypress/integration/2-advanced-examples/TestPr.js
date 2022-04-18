describe('My First Test', () => {
    it('Verify the registeration', () => {
     
        cy.visit("https://dex.globalfansy.com/register")
        cy.get("input[name='name']").type("Najeeb")
        cy.get("input[name='user_name']").type("rockstar")
        cy.get("input[name='email']").type("inform3njeeb@gmail.com")
        cy.get("input[name='password']").type("12345678")
        cy.get("input[name='password_confirmation']").type("12345678")
        cy.get("input[name='termsAndConditions']").check()
        cy.get("button[type='submit']").click()
        //Already have an account? Confirmation
        cy.title().should('eq', 'Already have an account?')
    })

  })