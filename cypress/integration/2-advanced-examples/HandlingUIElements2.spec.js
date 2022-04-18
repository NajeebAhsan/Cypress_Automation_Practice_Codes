describe('Handling UI Elements', () => {
    it('Verifying the Inputs and Radio buttons', () => {
        cy.visit("http://demo.automationtesting.in/Register.html")
    
        //verifying that checkbox is checked and its value is cricket
        cy.get("#checkbox1").check().should('be.checked').and('have.value', 'Cricket')
        cy.get("#checkbox2").check().should('be.checked').and('have.value', 'Movies')
        cy.get("#checkbox3").check().should('be.checked').and('have.value', 'Hockey')

        // verifying checkboxes to be unchecked after checked
        cy.get("#checkbox1").uncheck().should('not.be.checked')
        cy.get("#checkbox2").uncheck().should('not.be.checked')
        cy.get("#checkbox3").uncheck().should('not.be.checked')

        //To check the checboxes in a single statement instead of writing mulitple times
        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])
        })

    it('Verifying the Drop Downs', () => {
            //To select a value from the drop down
        cy.get("#Skills").select('Android').should('have.value','Android')
         })

    it('Verifying multiple selection languages from Drop Downs', () => {
            //To select multiple languages from the drop down
        cy.get("#msdd").click()
        cy.wait(2000)
        cy.get('.ui-corner-all').contains('Bulgarian').click()
        cy.get(".ui-corner-all").contains('Catalan').click()
        cy.get(".ui-corner-all").contains('Croatian').click()
        })

    it('Verifying multiple selection Countries from Search Drop Downs', () => {
        //To select multiple selection Countries from Search Drop Downs
        cy.get('[role=combobox]').click({force:true}) // if there is any dropdown opens and comes in its path to forcely click
        cy.get(".select2-search__field").type('Bangladesh')
        cy.get(".select2-search__field").type('{enter}')
        })
  })