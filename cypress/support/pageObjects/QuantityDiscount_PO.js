class QuantityDiscount_PO 
{
    clickOn_buy_button()
    {
        cy.get("#alzaDialog").contains("Koupit").click()
    }

    set_quantity(quantity)
    {
        cy.get("div.countEdit > input").type(quantity)
    }    

}

export default QuantityDiscount_PO;