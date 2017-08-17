import { ServicesWithHttpPage } from './app.po';

describe('services-with-http App', () => {
  let page: ServicesWithHttpPage;

  beforeEach(() => {
    page = new ServicesWithHttpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
