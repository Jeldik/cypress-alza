declare global {
    namespace Cypress {
        interface Chainable {
            setQuantity: typeof setQuantity;
        }
    }
}

export const setQuantity = (quantity: string) => {
    cy.get("div.countEdit > input").type(quantity)
}
