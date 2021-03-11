class AlzaGiftCards_PO 
{
    clickOn_AlzaGaming5000_Buy_button()
    {
        cy.get("[data-code='AGbezCZ04']").find(".btnk1").click()
    }

    clickOn_AlzaGaming2000_link()
    {
        cy.get(".fb > a[data-impression-id='AGbezCZ03']").click()
    }

    clickOn_AlzaGaming2000_lastVisited_link()
    {
        cy.get("#blockRecentlyViewedDetails").contains("Alza GAMING dárkový poukaz v hodnotě 2000 Kč").click()
    }
}

export default AlzaGiftCards_PO;