declare global {
    namespace Cypress {
        interface Chainable {
            assertItemWasAdded: typeof assertItemWasAdded;
        }
    }
}

/**
 * Assert notification text that item was added to the cart.
 */
export const assertItemWasAdded = () => {
    cy.get(".productInfo__texts__message")
        .should("contain.text", "Zboží bylo přidáno do košíku")
}
