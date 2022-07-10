import Base from '../base';

class CompletePage extends Base {
  get backHome() {
    return $('#back-to-products')
  }

  get header() {
    return $('h2=THANK YOU FOR YOUR ORDER')
  }

  get ponyExpress() {
    return $('.pony_express');
  }
}

export default new CompletePage();
