/// <reference types="cypress" />

describe('Test functionality adding product into cart', () => {
  const ALZA_GIFT_CARD_GAMING_2000 = 2000;
  const ALZA_GIFT_CARD_GAMING_5000 = 5000;
  const ALZA_CAFE_PRICE_FOR_TWO_PIECES = 129;
  const ALZA_CAFE_PRICE_FOR_THREE_PIECES = 109;

  beforeEach(() => {
    cy.visit("")
  })

  it.only("Add Gift card to cart from list", () => {
    cy.get('div.bx > a[href*="/darkove-poukazy/"]').click()
    cy.location("pathname").should("contain", "/darkove-poukazy/")

    cy.get(".subCategories.cz > a[href*='/darkove-poukazy-alza/']").click()
    cy.location("pathname").should("contain", "/gaming/darkove-poukazy-alza/")

    // add to cart
    cy.get("[data-code='AGbezCZ04']").find(".btnk1").click()

    cy.get(".productInfo__texts__message").should("contain.text", "Zboží bylo přidáno do košíku")

    cy.comparePrice(ALZA_GIFT_CARD_GAMING_5000)
  })

  it("Add Gift card to cart from product detail", () => {
    cy.get('div.bx > a[href*="/darkove-poukazy/"]').click()
    cy.location("pathname").should("contain", "/darkove-poukazy/")

    cy.get(".subCategories.cz > a[href*='/darkove-poukazy-alza/']").click()
    cy.location("pathname").should("contain", "/gaming/darkove-poukazy-alza/")

    // click on alza gaming 2000 gift card
    cy.get(".fb > a[data-impression-id='AGbezCZ03']").click()

    cy.contains("Koupit").click()

    cy.comparePrice(ALZA_GIFT_CARD_GAMING_2000)
  })

  it("Add Gift card to cart from last visited section", () => {
    cy.get('div.bx > a[href*="/darkove-poukazy/"]').click()
    cy.location("pathname").should("contain", "/darkove-poukazy/")

    cy.get(".subCategories.cz > a[href*='/darkove-poukazy-alza/']").click()
    cy.location("pathname").should("contain", "/gaming/darkove-poukazy-alza/")

    // click on alza gaming 2000 gift card
    cy.get(".fb > a[data-impression-id='AGbezCZ03']").click()

    cy.contains("Koupit").click()

    cy.visit("")

    cy.get('div.bx > a[href*="/darkove-poukazy/"]').click()
    cy.location("pathname").should("contain", "/darkove-poukazy/")

    cy.get(".subCategories.cz > a[href*='/darkove-poukazy-alza/']").click()
    cy.location("pathname").should("contain", "/gaming/darkove-poukazy-alza/")

    cy.get("#blockRecentlyViewedDetails").contains("Alza GAMING dárkový poukaz v hodnotě 2000 Kč").click()

    cy.contains("Koupit").click()

    cy.comparePrice(ALZA_GIFT_CARD_GAMING_2000, 2)
  })

  it("Add one product with quantity discount", () => {
    cy.search("alzacafe")

    // click on alza cafe product
    cy.get("[data-code='ALZcafe02']").find(".btnk1").click()
    
    cy.get("#alzaDialog").contains("Koupit").click()

    cy.get(".productInfo__texts__message").should("contain.text", "Zboží bylo přidáno do košíku")
  })

  it("Add two products with quantity discount", () => {
    cy.search("alzacafe")
    
    // click on alza cafe product
    cy.get("[data-code='ALZcafe02']").find(".btnk1").click()
    
    cy.setQuantity(2)
    cy.get("#alzaDialog").contains("Koupit").click()
    cy.assertItemWasAdded()
    cy.comparePrice(ALZA_CAFE_PRICE_FOR_TWO_PIECES, 2)
  })

  it("Add three products with quantity discount", () => {
    cy.search("alzacafe")
    cy.get("[data-code='ALZcafe02']").find(".btnk1").click()
    cy.setQuantity(3)
    cy.get("#alzaDialog").contains("Koupit").click()
    cy.assertItemWasAdded()
    cy.comparePrice(ALZA_CAFE_PRICE_FOR_THREE_PIECES, 3)
  })
})


