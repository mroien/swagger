import Base from '../base';

import * as siteData from '../../../data/site.data';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Base {
    /**
     * define selectors using getter methods
     */
    get bot() {
        return $('.bot_column')
    }

    get btnSubmit() {
        return $('#login-button');
    }

    get errorButton() {
        return $('.error-button');
    }

    get errorMessage() {
        return $('h3[data-test="error"]')
    }

    get inputUsername() {
        return $('#user-name');
    }

    get inputPassword() {
        return $('#password');
    }

    get loginCredentials() {
        return $('#login_credentials');
    }

    get logo() {
        return $('.login_logo');
    }

    get passwordText() {
        return $('.login_password');
    }

    async clearErrorMessage() {
        it('Clear error message', async () => {
            await (await this.errorButton).waitForClickable();
            await (await this.errorButton).click();
            await (await this.errorButton).waitForClickable({ reverse: true });
        });
    }

    async login (username: string, password: string) {
        await (await this.inputUsername).waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await (await this.btnSubmit).waitForClickable();
        await this.btnSubmit.click();
        if (username === siteData.locked_out_user) {
            await (await this.errorMessage).waitForDisplayed();
            expect(await this.errorMessage.getText()).toEqual(siteData.ERROR_MESSAGE);
        } else {
            await (await this.btnSubmit).waitForClickable({reverse: true});
            await (await super.title).waitForDisplayed();
            expect(await super.title.getText()).toEqual(siteData.PRODUCTS);
        }
    }

    async open () {
        return super.open('/');
        this.inputUsername.waitForDisplayed();
    }

    async validateErrorMessage(errMessage: string) {
        it(`Validate "${errMessage}" is present`, async () => {
            await (await this.errorMessage).waitForDisplayed();
            expect(await (await this.errorMessage).getText()).toEqual(errMessage);
        });
        this.clearErrorMessage();
    }
}

export default new LoginPage();
