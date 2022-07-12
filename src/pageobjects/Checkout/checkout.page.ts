import Base from '../base';

import * as siteData from '../../data/site.data';

class CheckoutPage extends Base {
  get continue() {
    return $('#continue')
  }

  get firstName() {
    return $('#first-name')
  }

  get lastName() {
    return $('#last-name');
  }

  get zipCode() {
    return $('#postal-code')
  }

  async checkout() {
    (await this.firstName).waitForDisplayed();
    (await this.firstName).setValue(siteData.FIRST_NAME);
    (await this.lastName).setValue(siteData.LAST_NAME);
    (await this.zipCode).setValue(siteData.ZIP_CODE);
    await this.continue.waitForClickable();
    await this.continue.click();
    await this.continue.waitForClickable({ reverse: true });
  }
}

export default new CheckoutPage();
