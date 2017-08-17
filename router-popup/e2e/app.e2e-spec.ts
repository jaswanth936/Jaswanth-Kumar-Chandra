import { RouterPopupPage } from './app.po';

describe('router-popup App', () => {
  let page: RouterPopupPage;

  beforeEach(() => {
    page = new RouterPopupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
