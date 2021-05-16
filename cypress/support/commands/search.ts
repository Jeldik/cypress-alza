declare global {
    namespace Cypress {
        interface Chainable {
            search: typeof search;
        }
    }
}

export const search = (text: string) => {
    cy.get("#edtSearch")
        .type(text)

    cy.get("#btnSearch")
        .click()
}
