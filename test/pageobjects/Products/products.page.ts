import Base from '../base';
class ProductPage extends Base {
    /**
     * define selectors using getter methods
     */
    get AZsort() {
      return $('option[value="az"]');
    }

    get HighToLowSort() {
      return $('option[value="hilo"]')
    }

    get inventoryBtns() {
      return $$('.btn_inventory');
    }

    get items() {
      return $$('.inventory_item');
    }

    get itemsName() {
      return $$('.inventory_item_name');
    }

    get linkedin() {
      return $('.social_linkedin');
    }

    get linkedinLogo() {
      return $('.linkedin-text');
    }

    get logo() {
      return $('.app_logo');
    }

    get lowToHighSort() {
      return $('option[value="lohi"]');
    }

    get peek() {
      return $('.peek');
    }

    get productSort() {
      return $('.product_sort_container');
    }

    get shoppingCart() {
      return $('.shopping_cart_link');
    }

    get shoppingCartBadge() {
      return $('.shopping_cart_badge');
    }

    get ZAsort() {
      return $('option[value="za"]')
    }
}

export default new ProductPage();
