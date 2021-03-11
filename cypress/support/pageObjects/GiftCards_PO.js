class GiftCards_PO 
{
    clickOn_AlzaGiftCards_link(){
        cy.get(".subCategories.cz  > a[href*='/darkove-poukazy-alza/']").click()
    }
}

export default GiftCards_PO;