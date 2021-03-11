const NEAREST_CITY = "Jihlava";

class ReadyToPickUp_PO 
{
    assert_selectedCity(){
        cy.get("h1").should("contain.text", NEAREST_CITY)
        cy.get("a.last").should("contain.text", NEAREST_CITY)
        cy.get("select").should("contain.text", NEAREST_CITY)
    }

}

export default ReadyToPickUp_PO;