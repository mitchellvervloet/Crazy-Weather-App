import { browser, by, element } from 'protractor';

export class CrazyWeatherAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cwa-root h1')).getText();
  }
}
