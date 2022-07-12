import LoginPage from '../../pageobjects/Login/login.page';
import ProductPage from '../../pageobjects/Products/products.page';

import * as siteData from '../../data/site.data';

describe('Validate Products Page Appearance.', () => {
  describe('Log into Swag Labs.', () => {
    it('Navigate to Swag Labs', async () => {
      await LoginPage.open();
    });

    it(`Login with ${siteData.standard_user}`, async () => {
      await LoginPage.login(siteData.standard_user, siteData.password);
    });
  });
  
  describe('Validate Products page.', () => {
    it('Validate SWAG Labs logo is present', async () => {
      await (await ProductPage.logo).waitForDisplayed();
    });
    
    it('Validate Shopping Cart is present', async () => {
      await (await ProductPage.shoppingCart).waitForDisplayed();
    });

    it('Validate Menu is present', async () => {
      await (await ProductPage.hamburgerMenu).waitForDisplayed();
    });

    it(`Validate page title is "${siteData.PRODUCTS}"`, async () => {
      expect(await ProductPage.title.getText()).toEqual(siteData.PRODUCTS);
    });

    it('Validate Product sort is present', async () => {
      (await ProductPage.productSort).waitForClickable();
    });

    it('Validate Robot is present', async () => {
      (await ProductPage.peek).waitForDisplayed();
    });

    it('Validate Robot is present', async () => {
      (await ProductPage.peek).waitForDisplayed();
    });

    it('Validate there are 6 items', async () => {
      await ProductPage.items[0]!.waitForDisplayed();
      expect(await ProductPage.items.length).toEqual(6);
    });

    it(`Validate the 3rd item name is: "${siteData.BOLT_TEE_SHIRT}"`, async () => {
      expect(await ProductPage.itemsName[2]?.getText()).toEqual(siteData.BOLT_TEE_SHIRT);
    });
  });

  describe('Validate Linkedin link.', () => {
    it('Validate Linkedin link is present', async () => {
      await (await ProductPage.linkedin).waitForClickable();
    });

    it('Naviage to Sauce Labs Linkin page', async () => {
      await (await ProductPage.linkedin).waitForClickable();
      await (await ProductPage.linkedin).click();
      await ProductPage.tabSwitch();
      await (await ProductPage.linkedinLogo).waitForDisplayed();
      await ProductPage.tabSwitchBackAndClose();
    });
  });
});
