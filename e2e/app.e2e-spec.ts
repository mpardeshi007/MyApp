import { Angular4FirebasePage } from './app.po';

describe('angular4-firebase App', () => {
  let page: Angular4FirebasePage;

  beforeEach(() => {
    page = new Angular4FirebasePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
