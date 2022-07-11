import CartPage from '../../pageobjects/Cart/cart.page';
import CheckoutPage from '../../pageobjects/Checkout/checkout.page';
import CompletePage from '../../pageobjects/Complete/complete.page';
import LoginPage from '../../pageobjects/Login/login.page';
import ProductPage from '../../pageobjects/Products/products.page';
import OverviewPage from '../../pageobjects/Overview/overview.spec';

import * as siteData from '../../../data/site.data';

describe('Full e2e happy path test.', () => {
  describe('Log into Swag Labs.', () => {
    it('Navigate to Swag Labs', async () => {
      await LoginPage.open();
    });

    it(`Login with ${siteData.standard_user}`, async () => {
      await LoginPage.login(siteData.standard_user, siteData.password);
    });
  });

  describe('Add items to Cart.', () => {
    it('Validate Cart is present', async () => {
      await (await ProductPage.shoppingCart).waitForClickable();
    });

    it('Add items to Cart', async () => {
        await ProductPage.inventoryBtns[0]?.waitForClickable();
        await ProductPage.inventoryBtns[0]?.click();
        await ProductPage.inventoryBtns[4]?.click();
    });

    it('Validate Cart has 2 items', async () => {
      expect(await (await ProductPage.shoppingCartBadge).getText()).toEqual('2');
    });
  });

  describe('Navigate to Cart.', () => {
    it('Click on Cart', async () => {
        await (await ProductPage.shoppingCart).waitForClickable();
        await (await ProductPage.shoppingCart).click();
    });

    it('Validate there are 2 items in the Cart', async () => {
      await ProductPage.itemsName[0]?.waitForDisplayed();
      expect(await (await ProductPage.itemsName).length).toEqual(2);
    });
  });

  describe('Remove an item from the Cart.', () => {
    it('Remove item from the Cart', async () => {
      await CartPage.cartBtns[0]?.waitForClickable();
      await CartPage.cartBtns[0]?.click();
    });

    it('Validate Cart has 1 item', async () => {
      expect(await (await ProductPage.itemsName).length).toEqual(1);
    });
  });

  describe('Checkout.', () => {
    it('Click checkout', async () => {
      await (await CartPage.checkout).waitForClickable();
      await (await CartPage.checkout).click();
      await (await CartPage.checkout).waitForClickable({ reverse: true });
    });

    it('Enter Valid Name and Zip Code', async () => {
      await CheckoutPage.checkout();
    });
  });

  describe('Overview.', () => {
    it('Verify Payment is present', async () => {
      await browser.pause(4000)
      await (await OverviewPage.valueLbl).waitForDisplayed();
    });

    it('Verify total is correct', async () => {
      expect(await (await OverviewPage.total).getText()).toContain(siteData.TOTAL);
    });

    it('Click Finish', async () => {
      await (await OverviewPage.finish).waitForClickable();
      await (await OverviewPage.finish).click();
      await (await OverviewPage.finish).waitForClickable({ reverse: true });
    });
  });

  describe('Complete Purchase.', () => {
    it('Validate the user is on the checkout complete page', async () => {
      await (await CompletePage.header).waitForDisplayed();
    });

    it('Validate the Pony Express Image is present', async () => {
      await (await CompletePage.ponyExpress).waitForDisplayed();
    });

    it('Validate the Back Home button is functional', async () => {
      await (await CompletePage.backHome).waitForClickable();
      await (await CompletePage.backHome).click();
      await (await CompletePage.backHome).waitForClickable({ reverse: true });
    });

    it('Validate the is back on the Product page', async () => {
      await (await ProductPage.productSort).waitForDisplayed();
    });
  });
});
