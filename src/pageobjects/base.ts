import * as siteData from '../data/site.data';
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Base {
    get about() {
        return $('a=About')
    }

    get hamburgerMenu() {
        return $('#react-burger-menu-btn');
    }

    get logoutBtn() {
        return $('a=Logout')
    }

    get menuWrap() {
        return $('.bm-menu-wrap');
    }

    get sauceLabsLink() {
        return $('.nav-image-link');
    }

    get title() {
        return $('.title');
    }

    async logout() {
        await (await this.hamburgerMenu).waitForClickable();
        await (await this.hamburgerMenu).click();
        await (await this.logoutBtn).waitForClickable();
        await (await this.logoutBtn).click();
        await (await this.logoutBtn).waitForClickable({ reverse: true });
        expect(await browser.getUrl()).toEqual(siteData.HOMEPAGE_URL);
    }

    async open (path: string) {
        return browser.url(`${path}`);
    }

    async openMenu() {
        await (await this.hamburgerMenu).waitForClickable();
        await (await this.hamburgerMenu).click();
        expect(await (await this.menuWrap).getAttribute('aria-hidden')).toEqual('false');
    }

    async tabSwitch() {
        await browser.waitUntil(async () => {
          return Object.values(await browser.getWindowHandles()).length > 1;
        }, {
          interval: 1000,
          timeout: 10000,
          timeoutMsg: 'Expected a new tab to open within 10s',
        },
        );
        await browser.switchToWindow(Object.values(await browser.getWindowHandles())[1]);
    }

    async tabSwitchBackAndClose() {
        await this.tabSwitch();
        await browser.closeWindow();
        await browser.switchToWindow(Object.values(await browser.getWindowHandles())[0]);
      }
}
