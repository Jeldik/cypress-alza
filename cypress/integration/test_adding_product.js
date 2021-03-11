/// <reference types="cypress" />

import HomePage_PO from "../support/pageObjects/HomePage_PO";
import GiftCards_PO from "../support/pageObjects/GiftCards_PO";
import AlzaGiftCards_PO from "../support/pageObjects/AlzaGiftCards_PO";
import CrossSale_PO from "../support/pageObjects/CrossSale_PO";
import AlzaGiftCardGaming2000_PO from "../support/pageObjects/AlzaGiftCardGaming2000_PO";
import AlzaCafe_PO from "../support/pageObjects/AlzaCafe_PO";
import QuantityDiscount_PO from "../support/pageObjects/QuantityDiscount_PO";

describe('Test functionality adding product into cart', () => {
  const ALZA_GIFT_CARD_GAMING_2000 = 2000;
  const ALZA_GIFT_CARD_GAMING_5000 = 5000;
  const ALZA_CAFE_PRICE_FOR_TWO_PIECES = 129;
  const ALZA_CAFE_PRICE_FOR_THREE_PIECES = 109;
  const homePage_PO = new HomePage_PO();
  const giftCards_PO = new GiftCards_PO();
  const alzaGiftCards_PO = new AlzaGiftCards_PO();
  const alzaGiftCardGaming2000_PO = new AlzaGiftCardGaming2000_PO();
  const crossSale_PO = new CrossSale_PO();
  const alzacafe_PO = new AlzaCafe_PO();
  const quantityDiscount_PO = new QuantityDiscount_PO();


  beforeEach(() => {
    homePage_PO.visitHomepage()
  })

  it("Add Gift card to cart from list", () => {
    homePage_PO.clickOn_GiftCards_link()
    giftCards_PO.clickOn_AlzaGiftCards_link()
    alzaGiftCards_PO.clickOn_AlzaGaming5000_Buy_button()
    crossSale_PO.assert_addingToCart_confirmMessage()
    crossSale_PO.assert_priceInCart(ALZA_GIFT_CARD_GAMING_5000)
  })

  it("Add Gift card to cart from product detail", () => {
    homePage_PO.clickOn_GiftCards_link()
    giftCards_PO.clickOn_AlzaGiftCards_link()
    alzaGiftCards_PO.clickOn_AlzaGaming2000_link()
    alzaGiftCardGaming2000_PO.clickOn_buy_button()
    crossSale_PO.assert_priceInCart(ALZA_GIFT_CARD_GAMING_2000)
  })

  it("Add Gift card to cart from last visited section", () => {
    homePage_PO.clickOn_GiftCards_link()
    giftCards_PO.clickOn_AlzaGiftCards_link()
    alzaGiftCards_PO.clickOn_AlzaGaming2000_link()
    alzaGiftCardGaming2000_PO.clickOn_buy_button()
    homePage_PO.visitHomepage()
    homePage_PO.clickOn_GiftCards_link()
    giftCards_PO.clickOn_AlzaGiftCards_link()
    alzaGiftCards_PO.clickOn_AlzaGaming2000_lastVisited_link()
    alzaGiftCardGaming2000_PO.clickOn_buy_button()
    crossSale_PO.assert_priceInCart(ALZA_GIFT_CARD_GAMING_2000, 2)
  })

  it("Add one product with quantity discount", () => {
    homePage_PO.find("alzacafe")
    alzacafe_PO.clickOn_alzaCafe250_buy_button()
    quantityDiscount_PO.clickOn_buy_button()
    crossSale_PO.assert_addingToCart_confirmMessage()
  })

  it("Add two products with quantity discount", () => {
    homePage_PO.find("alzacafe")
    alzacafe_PO.clickOn_alzaCafe250_buy_button()
    quantityDiscount_PO.set_quantity(2)
    quantityDiscount_PO.clickOn_buy_button()
    crossSale_PO.assert_addingToCart_confirmMessage()
    crossSale_PO.assert_priceInCart(ALZA_CAFE_PRICE_FOR_TWO_PIECES, 2)
  })

  it.only("Add three products with quantity discount", () => {
    homePage_PO.find("alzacafe")
    alzacafe_PO.clickOn_alzaCafe250_buy_button()
    quantityDiscount_PO.set_quantity(3)
    quantityDiscount_PO.clickOn_buy_button()
    crossSale_PO.assert_addingToCart_confirmMessage()
    crossSale_PO.assert_priceInCart(ALZA_CAFE_PRICE_FOR_THREE_PIECES, 3)
  })
})
