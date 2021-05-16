declare global {
    namespace Cypress {
        interface Chainable {
            comparePrice: typeof comparePrice;
        }
    }
}

/**
 * Compare price in cart
 * @param price number
 * @param quantity number
 */
export const comparePrice = (price: number, quantity: number = 1) => {
    cy.get("#price").then((el) => {

        let currentPriceText = el.text()
        let currentPriceWithoutCurrency = currentPriceText.substring(0, currentPriceText.length - 3);
        let currentPriceToCompare = parseInt(currentPriceWithoutCurrency.replace(/\s+/g, ''));

        expect(currentPriceToCompare).eq(price * quantity)
    })
}
