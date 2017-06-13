import { CrazyWeatherAppPage } from './app.po';

describe('crazy-weather-app App', () => {
  let page: CrazyWeatherAppPage;

  beforeEach(() => {
    page = new CrazyWeatherAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cwa!!');
  });
});
