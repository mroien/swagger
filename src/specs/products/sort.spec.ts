import LoginPage from '../../pageobjects/Login/login.page';
import ProductPage from '../../pageobjects/Products/products.page';

import * as siteData from '../../data/site.data';

describe('Validate Sort Functionality.', () => {
  describe('Log into Swag Labs.', () => {
    it('Navigate to Swag Labs', async () => {
      await LoginPage.open();
    });

    it(`Login with ${siteData.standard_user}`, async () => {
      await LoginPage.login(siteData.standard_user, siteData.password);
    });
  });
  
  describe('Validate Sort Feature.', () => {
    it('Validate sort is present', async () => {
      await (await ProductPage.productSort).waitForClickable();
    });
    
    it('Open Sort', async () => {
      await (await ProductPage.productSort).waitForClickable();
      await (await ProductPage.productSort).click();
      await browser.pause(500);
    });

    it('Click on Z to A option', async () => {
      await (await ProductPage.productSort).selectByAttribute('value', 'za')
      expect(await ProductPage.itemsName[0]?.getText()).toEqual(siteData.TEST_ALL_THE_THINGS);
    });
  });
});