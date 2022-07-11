import LoginPage from '../../pageobjects/Login/login.page';
import ProductPage from '../../pageobjects/Products/products.page';

import * as siteData from '../../../data/site.data';

describe('Products Page Menu Test.', () => {
  describe('Log into Swag Labs.', () => {
    it('Navigate to Swag Labs', async () => {
      await LoginPage.open();
    });

    it(`Login with ${siteData.standard_user}`, async () => {
      await LoginPage.login(siteData.standard_user, siteData.password);
    });
  });

  describe('Validate Menu is functional.', () => {
    it('Open Menu', async () => {
      await ProductPage.openMenu();
    });

    it('Click About in menu', async () => {
      await (await ProductPage.about).waitForClickable();
      await (await ProductPage.about).click();
      await (await ProductPage.about).waitForClickable({ reverse: true });
    });

    it('Validate the user is on Sauce Labs homepage', async () => {
      await ProductPage.sauceLabsLink.waitForDisplayed();
    });
  });

  describe('Navigate back to SWAG Labs site', () => {
    it('Navigate back to site', async () => {
      await browser.back();
      await (await ProductPage.logoutBtn).waitForDisplayed();
    });
  });
});
