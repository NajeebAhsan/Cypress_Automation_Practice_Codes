describe('Handling UI Elements', () => {
    it('Verifying Alerts 1', () => {
        cy.visit("https://www.rediff.com/")

        cy.get(".vdicon").click()
        cy.get('[href="https://is.rediff.com/login/dologin"]').click()
        cy.get('#btn_go').click()

        //To verify the alert message
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Please enter a valid email')
        })
        })

        it('Verifying Alerts 2', () => {
            cy.visit("https://testautomationpractice.blogspot.com")
            cy.get('#HTML9 > .widget-content > button').click()

            cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Press a button!')
        })
            })
    })