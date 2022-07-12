import LoginPage from '../../pageobjects/Login/login.page';

import * as siteData from '../../data/site.data';

describe('Login Page Appearance.', () => {
  describe('Validate Login Page elements.', () => {
    it('Navigate to Swag Labs', async () => {
      await LoginPage.open();
    });

    it('Validate SWAG Labs logo is present', async () => {
      await (await LoginPage.logo).waitForDisplayed();
    });

    it('Validate Username input is present', async () => {
      await (await LoginPage.inputUsername).waitForDisplayed();
    });

    it('Validate Password input is present', async () => {
      await (await LoginPage.inputPassword).waitForDisplayed();
    });

    it('Validate Login button is present', async () => {
      await (await LoginPage.btnSubmit).waitForClickable();
    });

    it('Validate Bot is present and has the correct image', async () => {
      await (await LoginPage.bot).waitForDisplayed();
      expect((await LoginPage.bot.getCSSProperty('background')).value).toContain(siteData.BACKGROUND_PNG);
    });
  });

  describe('Credentials Section.', () => {
    it('Validate the usernames are present', async () => {
      const usernames = (await (await LoginPage.loginCredentials).getText()).split('\n');
      usernames.shift();
      expect(usernames).toEqual(siteData.USERNAME_ARRAY);
    });

    it(`Validate the password is: "${siteData.password}"`, async () => {
      const password = (await (await LoginPage.passwordText).getText()).split('\n');
      expect(password[1]).toEqual(siteData.password);
    });
  });
});
