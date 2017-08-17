import { TwoWayPage } from './app.po';

describe('two-way App', () => {
  let page: TwoWayPage;

  beforeEach(() => {
    page = new TwoWayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
