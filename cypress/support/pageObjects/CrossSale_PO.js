class CrossSale_PO 
{
    assert_addingToCart_confirmMessage()
    {
        cy.get(".productInfo__texts__message").should("contain.text", "Zboží bylo přidáno do košíku")
    }
    
    /**
     * @param  {Number} price
     * @param  {Number} quantity=1
     */
    assert_priceInCart(price, quantity = 1)
    {
        cy.get("#price").then((el) => {
            var currentPriceText = el.text()
            var currentPriceWithoutCurrency = currentPriceText.substring(0, currentPriceText.length - 3);
            var currentPriceToCompare = parseInt(currentPriceWithoutCurrency.replace(/\s+/g, ''));
            expect(currentPriceToCompare).eq(price * quantity)
          })
    }
}

export default CrossSale_PO;