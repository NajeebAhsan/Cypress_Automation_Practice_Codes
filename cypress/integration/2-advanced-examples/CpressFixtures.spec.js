describe('Cypress Fixtures Data driven', function() {

    before(function(){
        cy.fixture('example.json').then(function(data){
             this.data=data //first data represent the parameter and other whole class
        })
    })

    it('Cypress Fixtures with Data driven', function()  
    {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[type=email]').clear().type(this.data.email)
        cy.get('input[type=password]').clear().type(this.data.password)
        cy.get('button[type=submit]').click()
    })
})