import { MyFirstDotNetCorePage } from './app.po';

describe('my-first-dot-net-core App', () => {
  let page: MyFirstDotNetCorePage;

  beforeEach(() => {
    page = new MyFirstDotNetCorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
