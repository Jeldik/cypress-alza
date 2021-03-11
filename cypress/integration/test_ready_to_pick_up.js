/// <reference types="cypress" />

import HomePage_PO from "../support/pageObjects/HomePage_PO";
import GiftCards_PO from "../support/pageObjects/GiftCards_PO";
import AlzaGiftCards_PO from "../support/pageObjects/AlzaGiftCards_PO";
import CrossSale_PO from "../support/pageObjects/CrossSale_PO";
import AlzaGiftCardGaming2000_PO from "../support/pageObjects/AlzaGiftCardGaming2000_PO";

describe('Test functionality adding product into cart', () => {
  const ALZA_GIFT_CARD_GAMING_2000 = 2000;
  const ALZA_GIFT_CARD_GAMING_5000 = 5000;
  const homePage_PO = new HomePage_PO();
  const giftCards_PO = new GiftCards_PO();
  const alzaGiftCards_PO = new AlzaGiftCards_PO();
  const alzaGiftCardGaming2000_PO = new AlzaGiftCardGaming2000_PO();
  const crossSale_PO = new CrossSale_PO();

  beforeEach(() => {
    homePage_PO.visitHomepage()
  })

  it("Get products by selected town", () => {
    homePage_PO.clickOn_toPickUp_link()
    homePage_PO.assert_selectedCity()
  })

})
