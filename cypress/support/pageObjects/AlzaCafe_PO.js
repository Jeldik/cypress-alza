class AlzaCafe_PO 
{
    clickOn_alzaCafe250_buy_button()
    {
        cy.get("[data-code='ALZcafe02']").find(".btnk1").click()
    }
}

export default AlzaCafe_PO;