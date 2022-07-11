import LoginPage from '../../pageobjects/Login/login.page';
import ProductPage from '../../pageobjects/Products/products.page';

import * as siteData from '../../../data/site.data';

describe('Login with different accounts.', () => {
  describe('Log into Swag Labs.', () => {
    it('Navigate to Swag Labs', async () => {
      await LoginPage.open();
    });

    siteData.USERNAME_ARRAY.forEach(async (username) => {
      it(`Login with ${username}`, async () => {
        await LoginPage.login(username, siteData.password);
        if (username !== siteData.locked_out_user) await LoginPage.logout();
      });
    })
  });
});
