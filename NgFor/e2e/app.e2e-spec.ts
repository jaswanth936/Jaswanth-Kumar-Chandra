import { NgForPage } from './app.po';

describe('ng-for App', () => {
  let page: NgForPage;

  beforeEach(() => {
    page = new NgForPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
