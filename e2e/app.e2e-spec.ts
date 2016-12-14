import { QcaPage } from './app.po';

describe('qca App', function() {
  let page: QcaPage;

  beforeEach(() => {
    page = new QcaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
