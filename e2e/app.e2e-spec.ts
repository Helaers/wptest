import { WptestPage } from './app.po';

describe('wptest App', function() {
  let page: WptestPage;

  beforeEach(() => {
    page = new WptestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
