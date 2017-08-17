import { InputOutputPage } from './app.po';

describe('input-output App', () => {
  let page: InputOutputPage;

  beforeEach(() => {
    page = new InputOutputPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
