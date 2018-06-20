import { browser, by, element } from 'protractor';

export class ApolloPage {
  navigateTo() {
    return browser.get('/');
  }
}
