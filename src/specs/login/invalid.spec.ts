import LoginPage from '../../pageobjects/Login/login.page';
import ProductPage from '../../pageobjects/Products/products.page';

import * as siteData from '../../data/site.data';

describe('Invalid input Test.', () => {
  describe('Navigate to Swag Labs.', () => {
    it('Validate on home page', async () => {
      await LoginPage.open();
    });
  });

  describe('Validate Error Message without Username and Password.', () => {
    it('Click Login without Username and Password', async () => {
      await (await LoginPage.btnSubmit).waitForClickable();
      await (await LoginPage.btnSubmit).click();
    });
    
    LoginPage.validateErrorMessage(siteData.USERNAME_REQUIRED);
  });

  describe('Validate Error Message with vaild Username and empty password.', () => {
    it('Click Login with only Username', async () => {
      await (await LoginPage.inputUsername).setValue(siteData.standard_user);
      await (await LoginPage.btnSubmit).waitForClickable();
      await LoginPage.btnSubmit.click();
    });

    LoginPage.validateErrorMessage(siteData.PASSWORD_REQUIRED);
  });

  describe('Validate Error Message for wrong password.', () => {
    it('Click Login with invalid password', async () => {
        await (await LoginPage.inputUsername).waitForDisplayed();
        await LoginPage.inputUsername.setValue(siteData.standard_user);
        await LoginPage.inputPassword.setValue(siteData.invalidPassword);
        await (await LoginPage.btnSubmit).waitForClickable();
        await LoginPage.btnSubmit.click();
    });

    LoginPage.validateErrorMessage(siteData.INVALID_PASSWORD);
  });
});
