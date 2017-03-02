import { Angular2restPage } from './app.po';

describe('angular2rest App', () => {
  let page: Angular2restPage;

  beforeEach(() => {
    page = new Angular2restPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
