import { JsonPipePage } from './app.po';

describe('json-pipe App', () => {
  let page: JsonPipePage;

  beforeEach(() => {
    page = new JsonPipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
