/// <reference types="cypress" />

describe('Test functionality adding product into cart', () => {
  const NEAREST_CITY = "Jihlava";

  beforeEach(() => {
    cy.visit("")
  })

  it("Get products by selected town", () => {
    cy.get('div.bx > a[href*="/zbozi-skladem"]').click()
    cy.get("h1").should("contain.text", NEAREST_CITY)
    cy.get("a.last").should("contain.text", NEAREST_CITY)
    cy.get("select").should("contain.text", NEAREST_CITY)
  })

})
