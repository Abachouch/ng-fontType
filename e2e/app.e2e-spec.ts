import { NgFontTypePage } from './app.po';

describe('ng-font-type App', () => {
  let page: NgFontTypePage;

  beforeEach(() => {
    page = new NgFontTypePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
