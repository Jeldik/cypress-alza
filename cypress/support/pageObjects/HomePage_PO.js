const NEAREST_CITY = "Jihlava";

class HomePage_PO {
    visitHomepage() {
        cy.visit("")
    }

    clickOn_GiftCards_link() {
        cy.get('div.bx > a[href*="/darkove-poukazy/"]').click()
    }

    clickOn_toPickUp_link() {
        cy.get('div.bx > a[href*="/zbozi-skladem"]').click()
    }

    assert_selectedCity() {
        cy.get("h1").should("contain.text", NEAREST_CITY)
        cy.get("a.last").should("contain.text", NEAREST_CITY)
        cy.get("select").should("contain.text", NEAREST_CITY)
    }

    find(text) {
        cy.get("#edtSearch").type("alzacafe")
        cy.get("#btnSearch").click()
    }
}

export default HomePage_PO;