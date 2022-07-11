import Base from '../base';

class CartPage extends Base {
  get cartBtns() {
    return $$('.cart_button');
  }

  get checkout() {
    return $('button=Checkout')
  }
}

export default new CartPage();
