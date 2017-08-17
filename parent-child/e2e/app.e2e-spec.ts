import { ParentChildPage } from './app.po';

describe('parent-child App', () => {
  let page: ParentChildPage;

  beforeEach(() => {
    page = new ParentChildPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
