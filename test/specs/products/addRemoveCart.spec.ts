import LoginPage from '../../pageobjects/Login/login.page';
import ProductPage from '../../pageobjects/Products/products.page';

import * as siteData from '../../data/site.data';

describe('Adding and Removing to Cart Test.', () => {
  describe('Log into Swag Labs.', () => {
    it('Navigate to Swag Labs', async () => {
      await LoginPage.open();
    });

    it(`Login with ${siteData.standard_user}`, async () => {
      await LoginPage.login(siteData.standard_user, siteData.password);
    });
  });

  describe('Add item to Cart.', () => {
    it('Validate Cart is present', async () => {
      await (await ProductPage.shoppingCart).waitForClickable();
    });

    it('Validate Cart is empty', async () => {
      await (await ProductPage.shoppingCartBadge).waitForClickable({ reverse: true });
    });

    it('Add item to Cart', async () => {
      await ProductPage.inventoryBtns[0]?.waitForClickable();
      await ProductPage.inventoryBtns[0]?.click();
    });

    it('Validate Cart has 1 item', async () => {
      expect(await (await ProductPage.shoppingCartBadge).getText()).toEqual('1');
    });
  });

  describe('Remove item from Cart.', () => {
    it('Remove item', async () => {
      await ProductPage.inventoryBtns[0]?.waitForClickable();
      await ProductPage.inventoryBtns[0]?.click();
    });

    it('Validate Cart is empty', async () => {
      await (await ProductPage.shoppingCartBadge).waitForClickable({ reverse: true });
    });
  });
});