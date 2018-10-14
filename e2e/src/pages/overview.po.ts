import {browser, by, element} from 'protractor';

export class OverviewPage {
  navigateTo() {
    return browser.get('/');
  }

  getMenu() {
    return element(by.id('menu'));
  }

  getHomeText() {
    return element(by.id("home")).getText();
  }

  getContactText() {
    return element(by.id("contact")).getText();
  }
}
