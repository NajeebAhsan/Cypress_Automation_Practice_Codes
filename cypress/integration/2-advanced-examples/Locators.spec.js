describe('Locating Elements', () => {
    it('Verify the Locators', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
        cy.get("[type='submit']").click()
        cy.get(".product-box-add-to-cart-button").click()
        cy.get("#product_enteredQuantity_4").clear().type("2") //manually type the value
        cy.get("#add-to-cart-button-4").click()
        cy.wait(2000)
        cy.get(".cart-label").click()

        cy.get(".product-unit-price").contains("$1,800.00") //validation
        })
  })