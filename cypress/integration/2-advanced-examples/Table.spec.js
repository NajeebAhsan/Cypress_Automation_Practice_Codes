describe('Handling Web/HTML tables', function() {
    it('Verifying Web/HTML tables', function()  {
        cy.visit("https://testautomationpractice.blogspot.com/")

        //To verify the value in a table
        cy.get("table[name='BookTable']").contains('td', 'Learn Selenium').should('be.visible')

        //Verifying value in specific row and column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium')
        .should('be.visible')

        //Verifying value on iterating rows 'Master in Java' whose Author is 'Amod'
        cy.get("table[name='BookTable']>tbody>tr td:nth-child(2)").each(($e,index,$list) =>{
            //$e represent element and index and $list are variables
            const text=$e.text()
            if(text.includes('Amod'))
            {
                //index is representing the row number
                cy.get("table[name='BookTable']>tbody>tr td:nth-child(1)").eq(index).then(function(bname)
                {
                    const bookName=bname.text()
                    expect(bookName).to.equal('Master In Java')
                })
            }
        })

    })
    
})