import Base from '../base';

class OverviewPage extends Base {
  get finish() {
    return $('#finish')
  }

  get total() {
    return $('.summary_total_label')
  }

  get valueLbl() {
    return $('.summary_value_label')
  }
}

export default new OverviewPage();
