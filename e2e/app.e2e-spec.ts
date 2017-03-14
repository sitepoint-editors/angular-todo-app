import { AngularTodoAppPage } from './app.po';

describe('angular-todo-app App', () => {
  let page: AngularTodoAppPage;

  beforeEach(() => {
    page = new AngularTodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
